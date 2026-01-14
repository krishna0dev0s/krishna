import {
  SignedOut,
  SignedIn,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  Code2,
  DollarSign,
  FileText,
  GraduationCapIcon,
  LayoutDashboard,
  PenBox,
  StarsIcon,
  MapPin,
  BookOpen,
  Zap,
  BarChart3,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { checkUser } from "@/lib/checkUser";
import { ThemeSwitcherButton } from "@/components/theme-switcher-button";

const Header = async() => {
  try {
    await checkUser();
  } catch (error) {
    console.error("Error checking user in header:", error);
  }
  return (
    <header
      className="border-b sticky top-0 z-50"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        color: "var(--card-foreground)",
        backdropFilter: "saturate(180%) blur(8px)",
        WebkitBackdropFilter: "saturate(180%) blur(8px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
      }}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/image.png"
            alt="Logo"
            width={120}
            height={40}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Navigation & Auth */}
        <div className="flex items-center gap-4">
          <SignedIn>
            {/* Dashboard */}
            <Link href="/dashboard">
              <Button variant="ghost" size="sm">
                <LayoutDashboard className="h-4 w-4 mr-2" />
                <span className="hidden md:inline">Industry Insights</span>
              </Button>
            </Link>

            {/* Analytics */}
            <Link href="/analytics">
              <Button variant="ghost" size="sm">
                <BarChart3 className="h-4 w-4 mr-2" />
                <span className="hidden md:inline">Analytics</span>
              </Button>
            </Link>

            {/* Growth Tools Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <StarsIcon className="h-4 w-4 mr-2" />
                  <span className="hidden md:inline">Growth Tools</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end"
                className="w-96 p-0 border-0 shadow-2xl rounded-2xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-background/95 via-background/90 to-background/85"
              >
                {/* Header Section */}
                <div className="px-6 py-4 border-b border-border/50">
                  <div className="flex items-center gap-2 mb-1">
                    <StarsIcon className="h-5 w-5 text-primary" />
                    <DropdownMenuLabel className="text-sm font-bold uppercase tracking-wider text-foreground">
                      Growth Tools
                    </DropdownMenuLabel>
                  </div>
                  <p className="text-xs text-muted-foreground">Accelerate your career with powerful tools</p>
                </div>

                {/* Grid Section - Career Boosters */}
                <div className="px-6 py-4 space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 mb-3">Career Boosters</p>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {/* Resume */}
                    <DropdownMenuItem asChild>
                      <Link href="/resume" className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/20 transition-all border border-border/30 hover:border-primary/50">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <FileText className="h-4 w-4 text-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-semibold text-foreground truncate">Resume</div>
                          <p className="text-xs text-muted-foreground truncate">Build ATS-optimized</p>
                        </div>
                      </Link>
                    </DropdownMenuItem>

                    {/* Cover Letter */}
                    <DropdownMenuItem asChild>
                      <Link href="/ai-cover-letter" className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/20 transition-all border border-border/30 hover:border-primary/50">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <PenBox className="h-4 w-4 text-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-semibold text-foreground truncate">Cover Letter</div>
                          <p className="text-xs text-muted-foreground truncate">AI-powered letters</p>
                        </div>
                      </Link>
                    </DropdownMenuItem>

                    {/* Interview Prep */}
                    <DropdownMenuItem asChild>
                      <Link href="/interview" className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/20 transition-all border border-border/30 hover:border-primary/50">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <GraduationCapIcon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-semibold text-foreground truncate">Interview</div>
                          <p className="text-xs text-muted-foreground truncate">Master questions</p>
                        </div>
                      </Link>
                    </DropdownMenuItem>

                    {/* Mock Interview */}
                    <DropdownMenuItem asChild>
                      <Link href="/mock-interview-demo" className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/20 transition-all border border-border/30 hover:border-primary/50">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <GraduationCapIcon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-semibold text-foreground truncate">Mock Interview</div>
                          <p className="text-xs text-muted-foreground truncate">AI practice & feedback</p>
                        </div>
                      </Link>
                    </DropdownMenuItem>

                    {/* Coding */}
                    <DropdownMenuItem asChild>
                      <Link href="/leetcode" className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/20 transition-all border border-border/30 hover:border-primary/50">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Code2 className="h-4 w-4 text-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-semibold text-foreground truncate">Coding</div>
                          <p className="text-xs text-muted-foreground truncate">Practice problems</p>
                        </div>
                      </Link>
                    </DropdownMenuItem>

                    {/* Roadmap */}
                    <DropdownMenuItem asChild>
                      <Link href="/roadmap" className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/20 transition-all border border-border/30 hover:border-primary/50">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-4 w-4 text-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-semibold text-foreground truncate">Roadmap</div>
                          <p className="text-xs text-muted-foreground truncate">Career planning</p>
                        </div>
                      </Link>
                    </DropdownMenuItem>

                    {/* Learning Path */}
                    <DropdownMenuItem asChild>
                      <Link href="/learning-path" className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/20 transition-all border border-border/30 hover:border-primary/50">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Zap className="h-4 w-4 text-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-semibold text-foreground truncate">Learning</div>
                          <p className="text-xs text-muted-foreground truncate">Structured path</p>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  </div>
                </div>

                {/* Footer Section */}
                <div className="px-6 py-3 border-t border-border/50 bg-muted/20">
                  <DropdownMenuItem asChild>
                    <Link href="/resume" className="flex items-center gap-2 justify-center w-full text-xs font-semibold text-primary hover:text-primary/80 transition-colors py-2">
                      <DollarSign className="h-4 w-4" />
                      View Premium Features
                    </Link>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          {/* Auth Buttons */}
          <SignedOut>
            <SignInButton />
            <SignUpButton>
              <Button variant="outline">Sign Up</Button>
            </SignUpButton>
          </SignedOut>

          {/* Theme Switcher */}
          <ThemeSwitcherButton />

          {/* User Avatar */}
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;