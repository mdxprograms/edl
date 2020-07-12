import ToastEditor from '@toast-ui/editor'
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight'
import '@toast-ui/editor/dist/toastui-editor.css'
import { DOM, mount, qs } from '@wallerbuilt/mantle'
import 'codemirror/lib/codemirror.css'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import Nav from './components/Nav'

// Elements
const { div } = DOM

// Root

const appRoot = qs('#app')(document)

const EditorContainer = div({ id: 'editor' }, '')

const App = div({}, [Nav, EditorContainer])

// probably overkill
const syncMount = new Promise((resolve) => {
  mount(appRoot, App)
  resolve(EditorContainer)
})

// Load
document.addEventListener('DOMContentLoaded', () => {
  syncMount.then((editorContainer) => {
    new ToastEditor({
      el: editorContainer,
      height: '95vh',
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      plugins: [[codeSyntaxHighlight, { hljs }]],
    })
  })
})
