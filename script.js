document.addEventListener("DOMContentLoaded", () => {
    const lines = [
      { elementId: "line1", text: "Hello, I'm Kimberley Sitanggang" },
      { elementId: "line2", text: "Undergraduate Software Engineering Student" },
      {
        elementId: "line3",
        text: "I'm interested in UI/UX design and database development. Currently, learning and building my skills through projects and hands-on exploration.",
      },
    ]
  
    const typingSpeed = 50
    const lineDelay = 1000
  
    let lineIndex = 0
  
    function typeLine() {
      if (lineIndex >= lines.length) {
        return
      }
  
      const currentLine = lines[lineIndex]
      const element = document.getElementById(currentLine.elementId)
      const text = currentLine.text
  
      element.textContent = ""
      element.style.opacity = 1
  
      let i = 0
      function typeChar() {
        if (i < text.length) {
          element.textContent += text.charAt(i)
          i++
          setTimeout(typeChar, typingSpeed)
        } else {
          lineIndex++
          setTimeout(typeLine, lineDelay)
        }
      }
      typeChar()
    }
  
    typeLine()
  })
  
