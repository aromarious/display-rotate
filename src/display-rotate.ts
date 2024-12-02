/**
 * Generate a command line for displayplacer to rotate the specified display by 90 degrees from the input received via stdin.
 *
 * This script reads input from stdin, processes it to rotate the display specified by the given ID by 90 degrees,
 * and then outputs the modified command line to stdout.
 *
 * @param id The display ID. If not provided as a command line argument, it will be read from the environment variable `DISPLAY_ROTATE_ID`.
 *
 * @environment
 * - `DISPLAY_ROTATE_ID`: The display ID to be used if not provided as a command line argument.
 *
 * @error If the display ID is not provided either as a command line argument or as an environment variable,
 *        a usage message will be output to standard error and the process will exit with code 1.
 */

import { readFileSync } from "fs"
const errors = {
  default: {
    exitCode: 1,
    message: "",
  },
  incorrectDisplayId: {
    exitCode: 2,
    message: 'Incorrect display ID "${id}".',
  },
}

const errorExit = ({
  exitCode,
  message,
}: {
  exitCode: number
  message: string | { template: string; variables: { [key: string]: string } }
}): void => {
  if (message) {
    if (typeof message === "string") {
      console.error(message)
    } else {
      console.error(interpolate(message))
    }
  } // message がなかったらメッセージ出力はしない
  process.exit(exitCode)
}

const interpolate = ({
  template,
  variables,
}: {
  template: string
  variables: { [key: string]: string }
}): string => {
  return template.replace(/\${(.*?)}/g, (_, key) => variables[key] || "")
}

const main = (): void => {
  try {
    const args: string[] = process.argv.slice(2) // Remove node and script path
    const id: string =
      args.length > 0 ? args[0] : process.env.DISPLAY_ROTATE_ID || ""
    if (!id) {
      errorExit(errors.default)
    }
    const input: string = readFileSync("/dev/stdin", "utf8").trim()
    const idRegex: RegExp = new RegExp(`(id:${id}.*?degree:)(\\d+)`)
    const checkId: boolean = idRegex.test(input)
    if (!checkId) {
      errorExit({
        exitCode: errors.incorrectDisplayId.exitCode,
        message: {
          template: errors.incorrectDisplayId.message,
          variables: { id },
        },
      })
    }
    const output: string = input
      .replace(
        new RegExp(`(id:${id}.*?degree:)(\\d+)`),
        (_, prefix, degree) => `${prefix}${(parseInt(degree, 10) + 90) % 360}`
      )
      .replace(
        /res:(\d+)x(\d+)/,
        (_, width, height) => `res:${height}x${width}`
      )
    console.log(output)
    process.exit(0)
  } catch (error) {
    errorExit(errors.default)
  }
}

main()