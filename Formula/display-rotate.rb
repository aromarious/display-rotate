class DisplayRotate < Formula
  desc "A command-line tool to Rotate your display on macOS using displayplacer"
  homepage "https://github.com/aromarious/display-rotate"
  url "https://github.com/aromarious/display-rotate/archive/refs/tags/v1.0.0.tar.gz"
  sha256 "81108d0cc50886b5bf121697cd49fed4c727c1f98adb5eaab777828560db8ea8"
  license "ISC"

  depends_on "node"
  depends_on "displayplacer"

  def install
    # Install only necessary files to libexec
    libexec.install Dir["dist", "bin", "package.json"]

    # Create the binary link
    (bin/"display-rotate").write_env_script libexec/"bin/display-rotate", PATH: "#{Formula["node"].opt_bin}:$PATH"
  end

  test do
    # Add a test command here
    system "#{bin}/display-rotate", "--version"
  end
end
