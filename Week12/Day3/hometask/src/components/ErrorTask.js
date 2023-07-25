import ErrorBoundary from "../ErrorBoundary";
import Counter from "./Counter";


const ErrorTask = () => {
    return(
        <div>
        <h3>Click on the numbers to increase the counters.
  The counter is programmed to throw error when it reaches 5. This simulates a JavaScript error in a component.</h3>
        <hr/>
        <h2>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</h2>
          <ErrorBoundary>
            <Counter />
            <Counter />
          </ErrorBoundary>
        <hr/>
        <h2>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</h2>
          <ErrorBoundary>
            <Counter />
          </ErrorBoundary>
          <Counter />
          <hr/>
          <h2>This counter is not inside of boundary. So if crashes, all other components are deleted.</h2>
          <Counter />
      </div>
    )
}

export default ErrorTask;