import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-mt-black border-t border-mt-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          <div className="inline-flex items-center space-x-3 mb-6">
            <Image
              src="/images/mt-joinery-logo.jpg"
              alt="MT Joinery Logo"
              width={120}
              height={50}
              className="h-12 w-auto"
            />
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">MT Joinery</h3>
          <p className="text-mt-yellow font-semibold text-lg mb-6">07708 088177</p>

          <div className="w-16 h-px bg-mt-yellow mx-auto mb-6"></div>

          <p className="text-sm text-mt-gray-400">&copy; 2024 MT Joinery. All Rights Reserved. Website by a friend.</p>
        </div>
      </div>
    </footer>
  )
}
