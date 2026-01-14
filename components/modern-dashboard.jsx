"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  FileText, MessageSquare, Code, Briefcase, BookOpen, Target,
  ChevronRight, Star, TrendingUp, Clock, CheckCircle, Zap,
  Users, Award, Flame, Sparkles
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function ModernDashboard() {
  const [activeFeature, setActiveFeature] = useState(null);

  // Website Features/Functions
  const features = [
    {
      id: "resume",
      icon: FileText,
      title: "Resume Builder",
      description: "Create professional resumes with AI assistance",
      color: "from-blue-500 to-blue-400",
      href: "/dashboard",
      stats: "12 resumes created"
    },
    {
      id: "interview",
      icon: Briefcase,
      title: "Interview Prep",
      description: "Practice interviews with AI feedback",
      color: "from-purple-500 to-purple-400",
      href: "/dashboard",
      stats: "45 interviews practiced"
    },
    {
      id: "leetcode",
      icon: Code,
      title: "LeetCode Solutions",
      description: "Solve coding problems with solutions",
      color: "from-yellow-500 to-yellow-400",
      href: "/dashboard",
      stats: "182 problems solved"
    },
    {
      id: "cover-letter",
      icon: MessageSquare,
      title: "Cover Letter",
      description: "Generate tailored cover letters",
      color: "from-pink-500 to-pink-400",
      href: "/dashboard",
      stats: "28 letters generated"
    },
    {
      id: "roadmap",
      icon: Target,
      title: "Learning Roadmap",
      description: "Personalized learning paths",
      color: "from-green-500 to-green-400",
      href: "/dashboard",
      stats: "5 roadmaps created"
    },
    {
      id: "analytics",
      icon: TrendingUp,
      title: "Analytics & Progress",
      description: "Track your career journey",
      color: "from-indigo-500 to-indigo-400",
      href: "/analytics",
      stats: "Real-time insights"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-fade-in-down">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-5xl font-bold text-gradient-primary mb-2">WatshiBo Hub</h1>
              <p className="text-gray-400 text-lg">Your Career Companion Dashboard</p>
            </div>
            <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
              <Flame className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-gray-300">42 day streak</span>
            </div>
          </div>
        </div>

        {/* Quick Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Resumes", value: "12", icon: FileText, color: "from-blue-500 to-blue-400" },
            { label: "Interviews Done", value: "45", icon: Briefcase, color: "from-purple-500 to-purple-400" },
            { label: "Problems Solved", value: "182", icon: Code, color: "from-yellow-500 to-yellow-400" },
            { label: "Success Rate", value: "94%", icon: CheckCircle, color: "from-green-500 to-green-400" }
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="glass-card p-4 stagger-{idx + 1}">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
            );
          })}
        </div>

        {/* Main Features Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-blue-400" />
              Features & Tools
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Link key={feature.id} href={feature.href}>
                  <Card className={`card-polished border-0 group cursor-pointer h-full hover-lift stagger-${idx + 1}`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-500 group-hover:translate-x-1 transition-transform" />
                      </div>
                      <CardTitle className="text-white mt-4">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-gray-300">{feature.description}</p>
                      <div className="flex items-center gap-2 pt-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-xs text-gray-400">{feature.stats}</span>
                      </div>
                      <div className="pt-3 border-t border-slate-700">
                        <span className="text-xs text-blue-400 font-medium group-hover:text-blue-300">Explore →</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Activity Feed */}
          <div className="lg:col-span-2">
            <Card className="card-polished border-0">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-400" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { action: "Updated resume", time: "2 hours ago", type: "resume" },
                    { action: "Completed 5 LeetCode problems", time: "5 hours ago", type: "code" },
                    { action: "Finished interview practice", time: "1 day ago", type: "interview" },
                    { action: "Generated cover letter", time: "2 days ago", type: "letter" }
                  ].map((activity, idx) => (
                    <div key={idx} className="flex items-center gap-3 pb-3 border-b border-slate-700 last:border-0">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-white font-medium">{activity.action}</p>
                        <p className="text-xs text-gray-400">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Tips */}
          <div>
            <Card className="card-polished border-0">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-400" />
                  Quick Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <p className="text-xs text-purple-300 font-medium mb-1">💡 Tip</p>
                  <p className="text-xs text-gray-300">Update your resume every month for best results</p>
                </div>
                <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <p className="text-xs text-blue-300 font-medium mb-1">🎯 Goal</p>
                  <p className="text-xs text-gray-300">Solve 3 LeetCode problems daily</p>
                </div>
                <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                  <p className="text-xs text-green-300 font-medium mb-1">⚡ Boost</p>
                  <p className="text-xs text-gray-300">Practice interviews to improve communication</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 p-6 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30">
          <div className="flex items-center justify-between flex-col md:flex-row gap-4">
            <div>
              <h3 className="text-white font-bold mb-1">Ready to transform your career?</h3>
              <p className="text-sm text-gray-300">Start with our resume builder and take the first step</p>
            </div>
            <Link href="/dashboard">
              <Button className="btn-primary-enhanced">Get Started Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
