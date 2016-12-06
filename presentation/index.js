// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  CodePane,
  Deck,
  Heading,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="orange">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Async / Await
            </Heading>
            <Heading size={1} fit caps>
              How to avoid callback hell?
            </Heading>
            <Link href="https://github.com/raymondsze/how-to-avoid-callback-hell">
              <Text bold caps textColor="black">View on Github</Text>
            </Link>
            <Text textSize="1em" margin="20px 0px 0px" bold textColor="white">Raymond Sze</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="orange" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={1} caps textColor="primary" textFont="primary">
              What is thunk?
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/thunk.example")}
              margin="0px auto"
            />
            <List>
              <Appear><ListItem>Thunk can accepts any number of arguments</ListItem></Appear>
              <Appear><ListItem>The last argument must be callback function</ListItem></Appear>
              <Appear><ListItem>Callback function accepts 2 arguments (error, result)</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="orange" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={1} caps textColor="primary" textFont="primary">
              Thunk Example
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/thunk2.example")}
              margin="0px auto"
            />
            <List>
              <Appear><ListItem>NodeJs api design are using thunk</ListItem></Appear>
              <Appear><ListItem>Lots of library are using thunk (e.g mongoose)</ListItem></Appear>
              <Appear><ListItem>But... Thunk makes Callback Hell!</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Callback Hell</Quote>
            </BlockQuote>
          </Slide>
          <Slide transition={["slide"]} bgColor="orange" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={1} caps textColor="primary" textFont="primary">
              Nesting Calls
            </Heading>
            <Appear>
              <CodePane
                lang="js"
                source={require("raw!../assets/problem.example")}
                margin="0px auto"
              />
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="orange" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={1} caps textColor="primary" textFont="primary">
              Parallel Async Processing
            </Heading>
            <Appear>
              <CodePane
                lang="js"
                source={require("raw!../assets/problem1.example")}
                margin="0px auto"
              />
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="orange" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={1} caps textColor="primary" textFont="primary">
              Not Exception Safe
            </Heading>
            <Appear>
              <CodePane
                lang="js"
                source={require("raw!../assets/problem2.example")}
                margin="0px auto"
              />
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="orange" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={1} caps textColor="primary" textFont="primary">
              No Cenetralized Error Handling
            </Heading>
            <Appear>
              <CodePane
                lang="js"
                source={require("raw!../assets/problem3.example")}
                margin="0px auto"
              />
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="orange" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={1} caps textColor="primary" textFont="primary">
              What we want to solve?
            </Heading>
            <List>
              <Appear><ListItem>Easy to read, No Long Nesting Callback</ListItem></Appear>
              <Appear><ListItem>Easy Parallel Async</ListItem></Appear>
              <Appear><ListItem>Particular Error Handling</ListItem></Appear>
              <Appear><ListItem>Centralized Error Handling</ListItem></Appear>
              <Appear><ListItem>Exception Safe</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Solution1: Async.js</Quote>
            </BlockQuote>
          </Slide>
          <Slide transition={["slide"]} bgColor="orange" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={1} caps textColor="primary" textFont="primary">
              Async.js
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/async.example")}
              margin="0px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="orange" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={1} caps textColor="primary" textFont="primary">
              Async.js
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/async1.example")}
              margin="0px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="orange" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={1} caps textColor="primary" textFont="primary">
              Async.js
            </Heading>
            <List>
              <Appear><ListItem>Need external library async.js</ListItem></Appear>
              <Appear><ListItem>Group callbacks to Array</ListItem></Appear>
              <Appear><ListItem>Still not Good to Read</ListItem></Appear>
              <Appear><ListItem>Still not Exception Safe</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Solution2: Promise</Quote>
            </BlockQuote>
          </Slide>
          <Slide transition={["slide"]} bgColor="orange" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={1} caps textColor="primary" textFont="primary">
              What is Promise
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/promise.example")}
              margin="0px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="orange" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={1} caps textColor="primary" textFont="primary">
              Promise API
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/promise2.example")}
              margin="0px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="orange" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={1} caps textColor="primary" textFont="primary">
              Promise API
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/promise3.example")}
              margin="0px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Imagine if fs.readFile return Promise</Quote>
            </BlockQuote>
          </Slide>
          <Slide transition={["slide"]} bgColor="orange" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={1} caps textColor="primary" textFont="primary">
              Nesting Calls
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/promise4.example")}
              margin="0px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="orange" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={1} caps textColor="primary" textFont="primary">
              Parallel Async
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/promise5.example")}
              margin="0px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="orange" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={1} caps textColor="primary" textFont="primary">
              Excpetion Safe
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/promise6.example")}
              margin="0px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>But fs.readFile NOT return Promise...</Quote>
            </BlockQuote>
          </Slide>
          <Slide transition={["slide"]} bgColor="orange">
            <Heading caps size={1} textColor="primary" textFont="primary">
              Thunk to Promise
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/thunk2promise.example")}
              margin="0px auto"
            />
            <List>
              <Appear><ListItem>Thunk to Promise is easy</ListItem></Appear>
              <Appear><ListItem>You don't need write yourself</ListItem></Appear>
              <Appear><ListItem>Checkout Bluebird.promisfy and Bluebird.promisifyAll</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="orange">
            <Heading size={1} caps textColor="primary" textFont="primary">
              Promise
            </Heading>
            <List>
              <Appear><ListItem>Exception Safe</ListItem></Appear>
              <Appear><ListItem>Easy to Parallel Async</ListItem></Appear>
              <Appear><ListItem>Still not Good to Read, then vs Array</ListItem></Appear>
              <Appear><ListItem>Need convert Thunk to Promise</ListItem></Appear>
              <Appear><ListItem>2 way to throw Exception (By throw or reject)</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Solution3: Coroutine (Promise + Generator)</Quote>
            </BlockQuote>
          </Slide>
          <Slide transition={["slide"]} bgColor="orange">
            <Heading caps size={1} textColor="primary" textFont="primary">
              What is Generator
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/generator.example")}
              margin="0px auto"
            />
            <List>
              <Appear><ListItem>Simulate the 'wait' effect</ListItem></Appear>
              <Appear><ListItem>Array, String, Map, Set are using Generator as Iterator</ListItem></Appear>
              <Appear><ListItem>Accessible by [Symbol.iterator]</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <List>
              <BlockQuote>
                <Quote>How Generator Help?</Quote>
              </BlockQuote>
              <Appear>
                <ListItem textColor="white">How about the generator could auto 'next'?</ListItem>
              </Appear>
              <Appear>
                <ListItem textColor="white">How about yielding Promise?</ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="orange">
            <Heading caps size={1} textColor="primary" textFont="primary">
              Coroutine
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/coroutine.example")}
              margin="0px auto"
            />
            <List>
              <Appear><ListItem>Assume value must be Promise object</ListItem></Appear>
              <Appear><ListItem>Auto pass the previous value to call .next</ListItem></Appear>
              <Appear><ListItem>Now yield become 'wait' if wrapped by coroutine</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Assume fs.readFile return Promise again...</Quote>
            </BlockQuote>
          </Slide>
          <Slide transition={["slide"]} bgColor="orange">
            <Heading caps size={1} textColor="primary" textFont="primary">
              Coroutine
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/coroutine2.example")}
              margin="0px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="orange">
            <Heading caps size={1} textColor="primary" textFont="primary">
              Problem Solved?
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/coroutine3.example")}
              margin="0px auto"
            />
            <List>
              <Appear><ListItem>Need write coroutine function</ListItem></Appear>
              <Appear><ListItem>Still need convert Thunk to Promise</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="orange">
            <Heading caps size={1} textColor="primary" textFont="primary">
              Co.js, Bluebird.js
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/coroutine4.example")}
              margin="0px auto"
            />
            <List>
              <Appear><ListItem>Bluebird.coroutine support Promise only</ListItem></Appear>
              <Appear><ListItem>co.wrap support Promise, Thunk, Generator, Constant</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="orange">
            <Heading caps size={1} textColor="primary" textFont="primary">
              Everything to Promise
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/coPromise.example")}
              margin="0px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="orange">
            <Heading caps size={1} textColor="primary" textFont="primary">
              Coroutine
            </Heading>
            <List>
              <Appear><ListItem>Exception Safe</ListItem></Appear>
              <Appear><ListItem>Easy to Parallel Async by Promise.all</ListItem></Appear>
              <Appear><ListItem>Make use of Generator syntax, Easy to Read</ListItem></Appear>
              <Appear><ListItem>With co.js, no need convert Thunk to Promise</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="orange">
            <Heading caps size={1} textColor="primary" textFont="primary">
              async, await
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/asyncAwait.example")}
              margin="0px auto"
            />
            <List>
              <Appear><ListItem>async = coroutine, await = yield</ListItem></Appear>
              <Appear><ListItem>support Promise only</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="orange">
            <Heading caps size={1} textColor="primary" textFont="primary">
              async, await
            </Heading>
            <List>
              <Appear><ListItem>Exception Safe</ListItem></Appear>
              <Appear><ListItem>Easy to Parallel Async by Promise.all</ListItem></Appear>
              <Appear><ListItem>async, await is ES2015 standard (Node7 support)</ListItem></Appear>
              <Appear><ListItem>Need convert Thunk to Promise (Bluebird could help you)</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>What if non Node 7 environment?</Quote>
            </BlockQuote>
          </Slide>
          <Slide transition={["slide"]} bgColor="orange">
            <Heading caps size={1} textColor="primary" textFont="primary">
              Babel, Eslint
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/babelrc.example")}
              margin="0px auto"
            />
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
