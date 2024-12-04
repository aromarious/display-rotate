class DisplayRotate < Formula
  desc "A command-line tool to Rotate your display on macOS using displayplacer"
  homepage "https://github.com/aromarious/display-rotate"
  url "https://github.com/aromarious/display-rotate/archive/refs/tags/v1.0.0.tar.gz"
  sha256 "" # You'll need to fill this after creating the release
  license "ISC"

  depends_on "node"
  depends_on "typescript"

  def install
    system "npm", "install", *Language::Node.std_npm_install_args(libexec)
    system "npm", "run", "build"
    
    # Create the binary link
    bin.install_symlink Dir["#{libexec}/bin/*"]
  end

  test do
    # Add a test command here
    system "#{bin}/display-rotate", "--version"
  end
end
