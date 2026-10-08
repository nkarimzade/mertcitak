import { Children, cloneElement, isValidElement } from 'react'

export default function TextReveal({ as: Tag = 'h2', children, ...props }) {
  let wordIndex = 0
  const splitWords = (nodes) => Children.map(nodes, (node) => {
    if (typeof node === 'string') {
      return node.split(/(\s+)/).map((word, index) => {
        if (!word.trim()) return word
        const delay = Math.min(wordIndex++, 12) * 45
        return <i className="text-reveal-word" style={{ '--word-delay': `${delay}ms` }} key={index}>{word}</i>
      })
    }
    if (isValidElement(node) && node.props.children) {
      return cloneElement(node, {}, splitWords(node.props.children))
    }
    return node
  })

  return <Tag {...props} data-reveal="words">{splitWords(children)}</Tag>
}
