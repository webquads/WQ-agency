import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-white">404</h2>
        <h3 className="text-2xl font-semibold text-white">Page Not Found</h3>
        <p className="text-gray-400">
          The page you are looking for doesn&apos;t exist.
        </p>
        <Link href="/">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
