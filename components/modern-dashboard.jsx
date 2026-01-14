"use client";

import React, { useState } from "react";
import { 
  Wifi, Bluetooth, Moon, Sun, Volume2, Brightness2, Maximize, Settings,
  Bell, Clock, Zap, Network, Eye, Keyboard, Mouse, Monitor,
  Home, FileText, MessageSquare, Heart, Star, Share2, Trash2,
  ChevronRight, Toggle2, Radio
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function ModernDashboard() {
  const [wifi, setWifi] = useState(true);
  const [bluetooth, setBluetooth] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [activeTab, setActiveTab] = useState("control");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 md:p-10">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 animate-fade-in-down">
          <h1 className="text-5xl font-bold text-gradient-primary mb-2">Modern Dashboard</h1>
          <p className="text-gray-400 text-lg">Control Center + Component Library</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {[
            { id: "control", label: "Control Center", icon: Settings },
            { id: "components", label: "Components", icon: Zap },
            { id: "buttons", label: "Buttons", icon: Star },
            { id: "cards", label: "Cards", icon: FileText }
          ].map((tab, idx) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 animate-slide-in-up stagger-${idx + 1} ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : "bg-slate-700/50 text-gray-300 hover:bg-slate-600/70"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Control Center Tab */}
        {activeTab === "control" && (
          <div className="space-y-6 animate-fade-in-scale">
            {/* Quick Settings Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* WiFi Toggle */}
              <div className="card-polished p-4 cursor-pointer" onClick={() => setWifi(!wifi)}>
                <div className="flex items-center justify-between mb-3">
                  <Wifi className={`w-5 h-5 transition-all ${wifi ? "text-blue-400" : "text-gray-500"}`} />
                  <Toggle2 className="w-4 h-4" />
                </div>
                <p className="text-sm font-medium text-white">WiFi</p>
                <p className={`text-xs ${wifi ? "text-blue-300" : "text-gray-500"}`}>
                  {wifi ? "Connected" : "Off"}
                </p>
              </div>

              {/* Bluetooth Toggle */}
              <div className="card-polished p-4 cursor-pointer" onClick={() => setBluetooth(!bluetooth)}>
                <div className="flex items-center justify-between mb-3">
                  <Bluetooth className={`w-5 h-5 transition-all ${bluetooth ? "text-blue-400" : "text-gray-500"}`} />
                  <Toggle2 className="w-4 h-4" />
                </div>
                <p className="text-sm font-medium text-white">Bluetooth</p>
                <p className={`text-xs ${bluetooth ? "text-blue-300" : "text-gray-500"}`}>
                  {bluetooth ? "On" : "Off"}
                </p>
              </div>

              {/* Dark Mode Toggle */}
              <div className="card-polished p-4 cursor-pointer" onClick={() => setDarkMode(!darkMode)}>
                <div className="flex items-center justify-between mb-3">
                  {darkMode ? (
                    <Moon className="w-5 h-5 text-purple-400" />
                  ) : (
                    <Sun className="w-5 h-5 text-yellow-400" />
                  )}
                  <Toggle2 className="w-4 h-4" />
                </div>
                <p className="text-sm font-medium text-white">Dark Mode</p>
                <p className={`text-xs ${darkMode ? "text-purple-300" : "text-yellow-300"}`}>
                  {darkMode ? "On" : "Off"}
                </p>
              </div>

              {/* Notifications Toggle */}
              <div className="card-polished p-4 cursor-pointer" onClick={() => setNotifications(!notifications)}>
                <div className="flex items-center justify-between mb-3">
                  <Bell className={`w-5 h-5 transition-all ${notifications ? "text-green-400" : "text-gray-500"}`} />
                  <Toggle2 className="w-4 h-4" />
                </div>
                <p className="text-sm font-medium text-white">Notifications</p>
                <p className={`text-xs ${notifications ? "text-green-300" : "text-gray-500"}`}>
                  {notifications ? "On" : "Off"}
                </p>
              </div>
            </div>

            {/* Volume & Brightness Sliders */}
            <div className="card-polished p-6 space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Volume2 className="w-5 h-5 text-blue-400" />
                    <span className="text-sm font-medium text-white">Volume</span>
                  </div>
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">70%</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full w-70 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Brightness2 className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm font-medium text-white">Brightness</span>
                  </div>
                  <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded">85%</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full w-85 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* System Info Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Clock, label: "Uptime", value: "47h 23m", color: "from-green-500 to-green-400" },
                { icon: Zap, label: "Battery", value: "92%", color: "from-blue-500 to-blue-400" },
                { icon: Network, label: "Network", value: "23.4 Mbps", color: "from-purple-500 to-purple-400" },
                { icon: Eye, label: "Display", value: "2560x1600", color: "from-pink-500 to-pink-400" }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="glass-card p-4 stagger-{idx + 1}">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-3`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-xs text-gray-400 mb-1">{item.label}</p>
                    <p className="text-lg font-bold text-white">{item.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Components Tab */}
        {activeTab === "components" && (
          <div className="space-y-6 animate-fade-in-scale">
            {/* Icon Grid */}
            <Card className="card-polished border-0">
              <CardHeader>
                <CardTitle className="text-white">Icon Components</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                  {[Wifi, Bluetooth, Settings, Bell, Clock, Zap, Network, Eye, Keyboard, Mouse, Monitor, Home, FileText, MessageSquare, Heart, Star].map((Icon, idx) => (
                    <div key={idx} className="icon-container-polished flex items-center justify-center w-12 h-12 mx-auto">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Status Indicators */}
            <Card className="card-polished border-0">
              <CardHeader>
                <CardTitle className="text-white">Status Indicators</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { status: "online", color: "bg-green-500", label: "Online" },
                    { status: "idle", color: "bg-yellow-500", label: "Idle" },
                    { status: "offline", color: "bg-red-500", label: "Offline" },
                    { status: "busy", color: "bg-purple-500", label: "In Meeting" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-700/50 transition">
                      <div className={`w-3 h-3 rounded-full ${item.color} animate-pulse`}></div>
                      <span className="text-sm text-white">{item.label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Buttons Tab */}
        {activeTab === "buttons" && (
          <div className="space-y-6 animate-fade-in-scale">
            <Card className="card-polished border-0">
              <CardHeader>
                <CardTitle className="text-white">Button Variants</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <Button className="btn-primary-enhanced w-full">Primary</Button>
                  <Button className="btn-secondary-enhanced w-full">Secondary</Button>
                  <Button className="w-full border border-blue-500 text-blue-400 hover:bg-blue-500/10">Outline</Button>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg">Gradient</Button>
                  <Button className="w-full bg-slate-700 hover:bg-slate-600 text-gray-300">Default</Button>
                  <Button className="w-full bg-red-600/20 text-red-400 hover:bg-red-600/30">Danger</Button>
                </div>
              </CardContent>
            </Card>

            {/* Button with Icons */}
            <Card className="card-polished border-0">
              <CardHeader>
                <CardTitle className="text-white">Icon Buttons</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {[Share2, Heart, Star, Trash2, Settings, Bell].map((Icon, idx) => (
                    <button key={idx} className="icon-container-polished w-12 h-12 flex items-center justify-center hover:scale-110">
                      <Icon className="w-5 h-5" />
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Cards Tab */}
        {activeTab === "cards" && (
          <div className="space-y-6 animate-fade-in-scale">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((idx) => (
                <Card key={idx} className="card-polished border-0 group">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-white text-lg">Card Title {idx}</CardTitle>
                      <ChevronRight className="w-5 h-5 text-gray-500 group-hover:translate-x-1 transition" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-gray-300">
                      Beautiful card component with smooth hover animations and glassmorphism effects.
                    </p>
                    <div className="flex gap-2">
                      <div className="h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex-1"></div>
                      <div className="h-8 bg-slate-700 rounded-lg flex-1"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Featured Card */}
            <Card className="card-polished border-0 md:col-span-2">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient-primary mb-2">Featured Section</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6 rounded-lg border border-blue-500/30">
                  <h3 className="text-white font-bold mb-2">Special Highlight</h3>
                  <p className="text-gray-300 text-sm">This is a featured card section with gradient background and premium styling.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
