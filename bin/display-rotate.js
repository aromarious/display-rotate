const args = process.argv.slice(2) // Remove node and script path
const id = args.length === 0 ? process.env.DISPLAY_ROTATE_ID : args[0]
if (!id) {
  console.error(`Usage: display-rotate <display-id>
  or place ~/.display-rotate with the display id.
  Execute "displayplacer list" command to pick up display id`)
  process.exit(1)
}
const input = require("fs").readFileSync("/dev/stdin", "utf8").trim()
const output = input
  .replace(
    new RegExp(`(id:${id}.*?degree:)(\\d+)`),
    (_, prefix, degree) => `${prefix}${(parseInt(degree, 10) + 90) % 360}`
  )
  .replace(/res:(\d+)x(\d+)/, (_, width, height) => `res:${height}x${width}`)
console.log(output)
