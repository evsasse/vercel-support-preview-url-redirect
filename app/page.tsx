import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Globe, Zap } from "lucide-react"

export default function HomePage() {
  const vercelEnv = process.env.VERCEL_ENV
  const customDomain = process.env.CUSTOM_DOMAIN || "yourdomain.com"

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Vercel Domain Redirect Demo</h1>
          <p className="text-xl text-muted-foreground">
            Automatically redirect vercel.app URLs to custom domains in preview environments
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Current Environment
              </CardTitle>
              <CardDescription>Environment and redirect status</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">VERCEL_ENV:</span>
                <Badge variant={vercelEnv === "preview" ? "default" : "secondary"}>{vercelEnv || "development"}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Redirect Active:</span>
                <Badge variant={vercelEnv === "preview" ? "default" : "outline"}>
                  {vercelEnv === "preview" ? "Yes" : "No"}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Target Domain:</span>
                <code className="text-sm bg-muted px-2 py-1 rounded">{customDomain}</code>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                How It Works
              </CardTitle>
              <CardDescription>Middleware-based URL redirection</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm space-y-2">
                <p>• Checks if VERCEL_ENV is "preview"</p>
                <p>• Detects vercel.app hostnames</p>
                <p>• Redirects to custom domain with 301 status</p>
                <p>• Preserves pathname and query parameters</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Setup Instructions</CardTitle>
            <CardDescription>Configure your custom domain for automatic redirects</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <h4 className="font-medium mb-2">1. Set Environment Variable</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Add your custom domain to your Vercel project settings:
                </p>
                <code className="block bg-muted p-3 rounded text-sm">CUSTOM_DOMAIN=yourdomain.com</code>
              </div>

              <div>
                <h4 className="font-medium mb-2">2. Deploy to Preview</h4>
                <p className="text-sm text-muted-foreground">
                  Create a preview deployment to test the redirect functionality. The middleware will automatically
                  redirect vercel.app URLs to your custom domain.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-2">3. Test the Redirect</h4>
                <p className="text-sm text-muted-foreground">
                  Visit your preview URL (*.vercel.app) and you'll be automatically redirected to your custom domain
                  while preserving the full path.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <a
            href="https://vercel.com/docs/projects/domains"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Learn more about Vercel domains
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
