import html5 from '../assets/tech/html5.svg'
import css3 from '../assets/tech/css3.svg'
import javascript from '../assets/tech/javascript.svg'
import react from '../assets/tech/react.svg'
import mysql from '../assets/tech/mysql.svg'
import php from '../assets/tech/php.svg'
import kotlin from '../assets/tech/kotlin.svg'
import figma from '../assets/tech/figma.svg'
import git from '../assets/tech/git.svg'
import github from '../assets/tech/github.svg'
import vscode from '../assets/tech/vscode.svg'
import chrome from '../assets/tech/chrome.svg'
import androidStudio from '../assets/tech/androidstudio.svg'

// Order matters: the first matching rule wins.
// `mono: true` marks a dark logo that is inverted on the dark theme so it stays visible.
const RULES = [
  [/^html/i, { src: html5 }],
  [/^css/i, { src: css3 }],
  [/^javascript/i, { src: javascript }],
  [/^react\.js$/i, { src: react }],
  [/^react \d/i, { src: react }],
  [/^mysql/i, { src: mysql }],
  [/^php/i, { src: php }],
  [/^kotlin/i, { src: kotlin }],
  [/^figma/i, { src: figma }],
  [/^git$/i, { src: git }],
  [/^github/i, { src: github, mono: true }],
  [/^visual studio code/i, { src: vscode }],
  [/^chrome/i, { src: chrome }],
  [/^android studio/i, { src: androidStudio }],
]

export function getTechIcon(name) {
  const rule = RULES.find(([pattern]) => pattern.test(name))
  return rule ? rule[1] : null
}
