"use client"

import { useRef, useEffect, useCallback } from "react"

interface ContentEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function ContentEditor({
  value,
  onChange,
  placeholder = "Voer de inhoud in...",
}: ContentEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null)
  const isInternalChange = useRef(false)

  useEffect(() => {
    if (editorRef.current && !isInternalChange.current) {
      if (editorRef.current.innerHTML !== value) {
        editorRef.current.innerHTML = value
      }
    }
    isInternalChange.current = false
  }, [value])

  const handleInput = useCallback(() => {
    if (editorRef.current) {
      isInternalChange.current = true
      onChange(editorRef.current.innerHTML)
    }
  }, [onChange])

  const execCommand = useCallback(
    (command: string, value?: string) => {
      document.execCommand(command, false, value)
      editorRef.current?.focus()
      handleInput()
    },
    [handleInput]
  )

  return (
    <div className="border-2 border-border rounded-lg overflow-hidden bg-background">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 border-b border-border bg-secondary/30">
        <ToolbarButton
          onClick={() => execCommand("bold")}
          title="Vet"
          label="B"
          className="font-bold"
        />
        <ToolbarButton
          onClick={() => execCommand("italic")}
          title="Cursief"
          label="I"
          className="italic"
        />
        <ToolbarButton
          onClick={() => execCommand("underline")}
          title="Onderstrepen"
          label="U"
          className="underline"
        />
        <div className="w-px h-6 bg-border mx-1" />
        <ToolbarButton
          onClick={() => execCommand("formatBlock", "<h2>")}
          title="Koptekst 2"
          label="H2"
          className="font-bold text-xs"
        />
        <ToolbarButton
          onClick={() => execCommand("formatBlock", "<h3>")}
          title="Koptekst 3"
          label="H3"
          className="font-bold text-xs"
        />
        <ToolbarButton
          onClick={() => execCommand("formatBlock", "<p>")}
          title="Paragraaf"
          label="¶"
          className="text-sm"
        />
        <div className="w-px h-6 bg-border mx-1" />
        <ToolbarButton
          onClick={() => execCommand("insertUnorderedList")}
          title="Opsomming"
          label="•"
          className="text-lg"
        />
        <ToolbarButton
          onClick={() => execCommand("insertOrderedList")}
          title="Genummerde lijst"
          label="1."
          className="text-xs font-bold"
        />
        <div className="w-px h-6 bg-border mx-1" />
        <ToolbarButton
          onClick={() => {
            const url = prompt("Voer de URL in:")
            if (url) execCommand("createLink", url)
          }}
          title="Link invoegen"
          label="🔗"
          className="text-sm"
        />
        <ToolbarButton
          onClick={() => execCommand("removeFormat")}
          title="Opmaak verwijderen"
          label="✕"
          className="text-sm text-destructive"
        />
      </div>

      {/* Editable Area */}
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        onInput={handleInput}
        data-placeholder={placeholder}
        className="min-h-[200px] p-4 prose prose-sm max-w-none focus:outline-none
          [&:empty]:before:content-[attr(data-placeholder)] [&:empty]:before:text-muted-foreground/50
          text-foreground leading-relaxed"
      />
    </div>
  )
}

function ToolbarButton({
  onClick,
  title,
  label,
  className = "",
}: {
  onClick: () => void
  title: string
  label: string
  className?: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`w-8 h-8 flex items-center justify-center rounded hover:bg-primary/10 
        hover:text-primary transition-colors text-muted-foreground ${className}`}
    >
      {label}
    </button>
  )
}
