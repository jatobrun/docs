---
sidebar_position: 10
---

# Vim

## Shortcuts Basicos

- `:`: Command mode
- `:w`: Save file
- `:w <filename>`: to "Save As"
- `:wq` or `:x`: Save and exit
- `:q!`: Exit without saving
- `i`: Insert at current location
- `I`: Insert at beginning of line
- `a`: Append to end of word
- `A`: Append to end of line
- `dw`: Delete word
- `:d` or `dd`: Delete line
- `<#>G` or `:<#>`: Move to a particular line #

### Ranges

- `:#,#<command>`: Using ranges in vi
- `:1,10d`: Deletes line 1-10
- `:set number`: Displays line numbers
- `:set number!`: to disable
- `vi +# <filename>`: Opens a file to a particular line example. `vi +12 file.txt`

### Searching within a document

- `/<string>` or `:s/<string>`: Searching within a document
  - `?`: for backward
  - `n`: for next
  - `N`: for previous

- `vi +/<text> filename.txt`: Opens a file to the first occurrence of a term

### Search and Replace

- `:s/<findtext>/<replacetext>`: Replaces text on one line
- `:%s/<findtext>/<replacetext>`: Replaces text throughout the file
- `:#,#s/<findtext>/<replacetext>`: Replaces text within a range

### Navigation shortcuts

- `h`: Move left
- `l`: Move right
- `k`: Move up
- `j`: Move down
- `o`: New line after line
- `a`: Append after cursor

### Deleting text

- `dd` or `:d`: delete line
- `dw`: delete word
- `D`: delete to the end of the line

### Copy and Paste

- `yy` or `:y`: Copy current line
- `:#,#y`: Copy a ranges of lines
- `p`: Paste buffer after the current line

### Save or Quit

- `ZZ`: exit and save changes
- `:w!`: save overwriting file
- `:q!`: Exit ignoring any changes
- `:e`: switch to another file
- `:e!`: switch to another file without saving current file

:::tip
Vim tiene un archivo de configuracion el cual podemos customizar y que
persista dichas configuraciones cada que abrimo vim. El archivo se
llama `~/.vimrc`
:::
