import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import BrowserOnly from '@docusaurus/BrowserOnly'

export default function App(props) {
  const [releaseNotes, setReleaseNotes] = useState()

  useEffect(() => {
    fetch(props.url)
      .then((response) => response.text())
      .then((result) => {
        result = result
          .split('## ')
          .filter((item) => !item.includes('# Changelog'))
          .map((version) => {
            var [number, ...contents] = version.split('\n')
            contents = contents.join('\n')
            return {
              number: number.replace('\\[', '').replace(']', ''),
              notes: contents,
            }
          })
          .filter(({ number }) => !number.includes('Not Published'))

        // console.log(result)
        setReleaseNotes(result)
      })
  }, [])

  return (
    <BrowserOnly fallback={<div>Release notes not supported</div>}>
      {() => {
        if (!releaseNotes) {
          return <h2>Loading release notes...</h2>
        }
        return (
          <div>
            {releaseNotes.map((version, index) => (
              <details open={index == 0} key={index}>
                <summary>{version.number}</summary>
                <p>{version.notes}</p>
                {/* <ReactMarkdown>{version.notes}</ReactMarkdown> */}
              </details>
            ))}
          </div>
        )
      }}
    </BrowserOnly>
  )
}
