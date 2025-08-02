export const codingData = {
  title: "💻 Logical & Practical Coding Tasks",
  questions: [
    {
      id: 1,
      title: "Reverse String",
      type: "code-only",
      description:
        "Reversing a string is a common interview question that tests basic string manipulation and loop understanding. It can be solved using multiple approaches.",
      code: `function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}`,
    },
    {
      id: 2,
      title: "Find Missing Number",
      type: "code-only",
      description:
        "Finding a missing number in a sequence is a common algorithmic problem that tests mathematical thinking and array manipulation skills.",
      code: `function findMissingNumber(arr, N) {
  let expectedSum = (N * (N + 1)) / 2;
  let actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}`,
    },
    {
      id: 3,
      title: "Debounce Function",
      type: "code-only",
      description:
        "Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often. It's commonly used in search inputs and window resize events.",
      code: `function debounce(func, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}`,
    },
    {
      id: 4,
      title: "Throttle Function",
      type: "code-only",
      description:
        "Throttling is a technique that limits how often a function can be called. It's useful for performance optimization in scenarios like scroll events or API calls.",
      code: `function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function(...args) {
    if (!lastRan) {
      func.apply(this, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(this, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}`,
    },
    {
      id: 5,
      title: "Palindrome Check",
      type: "code-only",
      description:
        "Checking if a string is a palindrome is a common interview question that tests string manipulation and two-pointer technique understanding.",
      code: `function isPalindrome(str) {
  let left = 0, right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}`,
    },
    {
      id: 6,
      title: "Kadane's Algorithm",
      type: "code-only",
      description:
        "Kadane's algorithm is used to find the maximum subarray sum in an array. It's a dynamic programming approach that's efficient and commonly asked in interviews.",
      code: `function maxSubarraySum(arr) {
  let maxSum = arr[0];
  let currentSum = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}`,
    },
    {
      id: 7,
      title: "Find Duplicates",
      type: "code-only",
      description:
        "Finding duplicates in an array is a common problem that tests knowledge of data structures and time/space complexity optimization.",
      code: `function findDuplicates(arr) {
  let seen = new Set();
  let duplicates = new Set();
  
  for (let num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }
  return Array.from(duplicates);
}`,
    },
  ],
};
