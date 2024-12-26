function foo(a, b) {
  if (a === null || b === null || a === undefined || b === undefined) {
    return null; // Handle null and undefined values using strict equality
  }

  // ... rest of the function
}