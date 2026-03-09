/**
 * Renders Payload's Lexical rich text output.
 * Lexical serializes to a JSON node tree; this component converts it to HTML.
 */

type LexicalNode = {
  type: string
  version?: number
  tag?: string
  format?: number | string
  indent?: number
  direction?: string
  text?: string
  url?: string
  children?: LexicalNode[]
  listType?: 'bullet' | 'number'
  value?: number
}

function formatText(node: LexicalNode): React.ReactNode {
  let el: React.ReactNode = node.text ?? ''
  const fmt = node.format as number
  if (fmt & 1) el = <strong>{el}</strong>
  if (fmt & 2) el = <em>{el}</em>
  if (fmt & 8) el = <u>{el}</u>
  if (fmt & 4) el = <s>{el}</s>
  if (fmt & 16) el = <code style={{ background: 'var(--bg-warm)', padding: '2px 6px', borderRadius: 4, fontSize: '0.9em' }}>{el}</code>
  return el
}

function renderNode(node: LexicalNode, idx: number): React.ReactNode {
  switch (node.type) {
    case 'root':
      return (
        <div key={idx}>
          {node.children?.map((child, i) => renderNode(child, i))}
        </div>
      )

    case 'paragraph': {
      const children = node.children?.map((child, i) => renderNode(child, i))
      const isEmpty = !node.children?.some((c) => (c.text ?? '').trim() !== '')
      if (isEmpty) return <br key={idx} />
      return (
        <p key={idx} style={{ marginBottom: 20, lineHeight: 1.75, color: 'var(--text-secondary)', fontSize: 17 }}>
          {children}
        </p>
      )
    }

    case 'heading': {
      const tag = (node.tag as string) ?? 'h2'
      const sizeMap: Record<string, string> = {
        h1: 'clamp(28px, 4vw, 40px)',
        h2: 'clamp(24px, 3vw, 32px)',
        h3: 'clamp(20px, 2.5vw, 26px)',
        h4: '20px',
        h5: '18px',
        h6: '16px',
      }
      const Tag = tag as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
      return (
        <Tag
          key={idx}
          style={{
            fontSize: sizeMap[tag] ?? '24px',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            lineHeight: 1.2,
            color: 'var(--text)',
            marginTop: 40,
            marginBottom: 16,
          }}
        >
          {node.children?.map((child, i) => renderNode(child, i))}
        </Tag>
      )
    }

    case 'text':
      return <span key={idx}>{formatText(node)}</span>

    case 'linebreak':
      return <br key={idx} />

    case 'link': {
      const url = (node.url ?? '#') as string
      const isExternal = url.startsWith('http')
      return (
        <a
          key={idx}
          href={url}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          style={{ color: 'var(--accent)', textDecoration: 'underline' }}
        >
          {node.children?.map((child, i) => renderNode(child, i))}
        </a>
      )
    }

    case 'list': {
      const Tag = node.listType === 'number' ? 'ol' : 'ul'
      return (
        <Tag
          key={idx}
          style={{
            marginBottom: 20,
            paddingLeft: 24,
            color: 'var(--text-secondary)',
            fontSize: 17,
            lineHeight: 1.75,
          }}
        >
          {node.children?.map((child, i) => renderNode(child, i))}
        </Tag>
      )
    }

    case 'listitem':
      return (
        <li key={idx} style={{ marginBottom: 6 }}>
          {node.children?.map((child, i) => renderNode(child, i))}
        </li>
      )

    case 'quote':
      return (
        <blockquote
          key={idx}
          style={{
            borderLeft: '3px solid var(--accent)',
            paddingLeft: 20,
            marginBottom: 24,
            fontStyle: 'italic',
            color: 'var(--text-secondary)',
            fontSize: 18,
            lineHeight: 1.65,
          }}
        >
          {node.children?.map((child, i) => renderNode(child, i))}
        </blockquote>
      )

    case 'horizontalrule':
      return <hr key={idx} style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '32px 0' }} />

    default:
      if (node.children) {
        return <span key={idx}>{node.children.map((child, i) => renderNode(child, i))}</span>
      }
      return null
  }
}

export function RichText({ content }: { content: unknown }) {
  if (!content || typeof content !== 'object') return null
  const root = content as LexicalNode
  if (root.type !== 'root') return null
  return (
    <div className="rich-text">
      {root.children?.map((node, i) => renderNode(node, i))}
    </div>
  )
}
