class DisplayRotate < Formula
  desc "Rotate your display easily via command-line on macOS using displayplacer."
  homepage "https://github.com/aromarious/display-rotate"
  url "https://github.com/aromarious/display-rotate/archive/refs/tags/v1.0.1.tar.gz"
  sha256 "f50b7d4262cb99c9548034abd9ae521869ed805501edc8b2f7e0afc798f025d7"
  license "ISC"

  depends_on "node"
  depends_on "displayplacer"
  depends_on "jq"

  def install
    system "npm", "install"
    system "npm", "run", "build"
    libexec.install "package.json", "package-lock.json", "bin", "dist"
    bin.install_symlink libexec/"bin/display-rotate"
  end

  test do
    # Add a test command here
    system "#{bin}/display-rotate", "--version"
  end
end
