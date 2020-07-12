import ToastEditor from "@toast-ui/editor";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import "@toast-ui/editor/dist/toastui-editor.css";
import { DOM, mount, qs } from "@wallerbuilt/mantle";
import "codemirror/lib/codemirror.css";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import Menu from "./components/Menu";

// Elements
const { div } = DOM;

// Root

const appRoot = qs("#app")(document);

const EditorContainer = div(
  { id: "editor", className: "" },
  ""
);

const App = div({}, [Menu, EditorContainer]);

mount(appRoot, App);

const Editor = new ToastEditor({
  el: EditorContainer,
  height: '95vh',
  initialEditType: "markdown",
  previewStyle: "vertical",
  plugins: [[codeSyntaxHighlight, { hljs }]],
});
