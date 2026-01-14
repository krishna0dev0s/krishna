// Safe API initialization - prevents module-level errors from returning HTML

import { GoogleGenerativeAI } from "@google/generative-ai";

/**
 * Safely initialize Gemini API with fallback
 * Returns either a valid client or a fallback object
 */
export function getGeminiClient(apiKey) {
  if (!apiKey) {
    console.warn('[API] Gemini API key not configured');
    return null;
  }
  
  try {
    return new GoogleGenerativeAI(apiKey);
  } catch (error) {
    console.error('[API] Failed to initialize Gemini:', error?.message);
    return null;
  }
}

/**
 * Wrap all API handlers to ensure JSON response on any error
 */
export function wrapApiHandler(handler) {
  return async (request) => {
    try {
      return await handler(request);
    } catch (error) {
      console.error('[API] Unhandled error in handler:', error?.message);
      console.error('[API] Error stack:', error?.stack);
      
      // Ensure we ALWAYS return JSON
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Internal server error',
          message: error?.message || 'Unknown error'
        }),
        { 
          status: 500, 
          headers: { "Content-Type": "application/json" } 
        }
      );
    }
  };
}

/**
 * Safe JSON response wrapper
 */
export function jsonResponse(data, status = 200) {
  return new Response(
    JSON.stringify(data),
    { 
      status, 
      headers: { "Content-Type": "application/json" } 
    }
  );
}

/**
 * Safe error response wrapper
 */
export function errorResponse(error, status = 500, fallback = {}) {
  console.error('[API] Error:', error?.message || error);
  
  return new Response(
    JSON.stringify({
      success: false,
      error: error?.message || 'Unknown error',
      ...fallback
    }),
    { 
      status, 
      headers: { "Content-Type": "application/json" } 
    }
  );
}
