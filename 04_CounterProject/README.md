# Counter

In React, when you call the `setCounter` function to update a state variable, React schedules an asynchronous update to the state. This means that the state value doesn't immediately change after you call `setCounter`. Instead, React batches state updates for better performance.

In your original code, you're calling `setCounter` multiple times in quick succession inside the `addvalue` function. However, since state updates are asynchronous, each call to `setCounter` is based on the current value of `counter` at the time of the function call, not the updated value from the previous call.

So, when you call `setCounter(counter+1)` multiple times in a row, each call sees the same initial value of `counter`. As a result, the state only increments by 1, not by the intended multiple increments.

To correctly increment the state multiple times based on the previous value, you should use the functional form of `setCounter`, which provides the previous state value as an argument. This ensures that each call to `setCounter` receives the updated value from the previous state, allowing you to increment it correctly.
