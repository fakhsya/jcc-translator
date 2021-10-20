# Google Translate CLI

Menerjemahkan teks menggunakan Penerjemah Google dari terminal.

## Instalasi
```
npm install -g google-translate-cli
```
## Penggunaan
```
  Usage: translate [options] <text ...>
  Options:
    -h, --help               output usage information
    -V, --version            output the version number
    -a, --auto               Auto-detect source language
    -d, --details            View details
    -l, --list               List all available languages
    -s, --source [language]  Source language [en]
    -t, --target [language]  Target language [es]
  Examples:
     $ translate 'I want to translate this text'
     $ translate -s es -t en 'Quiero traducir este texto'
     $ translate -s en -t es I want to translate this text
     $ translate -a 'Au revoir' -d
     $ pbpaste | translate # when text stored in Mac clipboard
```
Terjemahan dari bahasa Inggris ke bahasa Spanyol secara bawaan.
