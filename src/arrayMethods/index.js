const find_missing = function (input) {
  let n = input.length + 1;
  let sum = 0;
  for (let i in input) {
    sum += input[i];
  }
  return Math.floor((n * (n + 1)) / 2) - sum;
};

const reverse = function (num) {
  let result = 0;
  while (num !== 0) {
    result = result * 10 + (num % 10);
    num = Math.trunc(num / 10);
  }
  if (result > 2 ** 31 || result < -(2 ** 31)) return 0;
  return result;
};


const permute = function(nums) {
    let results = [];
let go = (current) => {
      if (current.length === nums.length){
        results.push(current);
        return;
      }
      nums.forEach(n => {
        if (!current.includes(n)){
          go([...current, n]);
        }
      });
    }
    go([]);
    return results;
};


const checkPermutation = function(s1, s2) {
    const len1 = s1.length, len2 = s2.length;
    if (len1 > len2) return false;
  const count = Array(26).fill(0);
    for (let i = 0; i < len1; i++) {
        count[s1.charCodeAt(i)-97]++;
        count[s2.charCodeAt(i)-97]--;
    }
    if (!count.some(e => e !== 0)) return true;
  for (let i = len1; i < len2; i++) {
        count[s2.charCodeAt(i)-97]--;
        count[s2.charCodeAt(i-len1)-97]++;
        if (!count.some(e => e !== 0)) return true;
    }
    return false;
  };


  const longestValidParentheses = function(S) {
    let stack = [-1], ans = 0;
    for (let i = 0; i < S.length; i++)
      if (S[i] === '(') stack.push(i)
      else if (stack.length === 1) stack[0] = i
      else stack.pop(), ans = Math.max(ans, i - stack[stack.length-1])
    return ans
  };


  const fourSum = function(nums, target) {
    let result = [];
    let length = nums.length;
    if (length < 4) return result; 
    nums = nums.sort((a, b) => a - b );
  for (let i = 0; i < length - 3; i++) {
      if (nums[i] === nums[i - 1]) continue;
      for (let j = i + 1; j < length - 2; j++) {
        if (j > i + 1 && nums[j] === nums[j - 1]) continue;
  let k = j + 1;
        let l = length - 1;
  while (k < l) {
          const sum = nums[i] + nums[j] + nums[k] + nums[l];
  if (sum === target) {
            result.push([nums[i], nums[j], nums[k], nums[l]])
          }
  if (sum <= target) {
            k += 1;
            while (nums[k] === nums[k - 1]) {
              k += 1;
            }
          }
  if (sum >= target) {
            l -= 1;
            while (nums[l] === nums[l + 1]) {
              l -= 1;
            }
          }
        }
      }
    }
  return result;
  };


  const multiply = function(num1, num2) {
    if (num1 == 0 || num2 == 0) return 0;
    const result = [];
   for (let a = num1.length - 1; a >= 0; a -- ) {
    for (let b = num2.length - 1; b >= 0; b -- ) {
    const p1 = a + b;
    const p2 = a + b + 1;
    const sum = (result[p2] ?? 0) + num1[a] * num2[b];
   result[p1] = (result[p1] ?? 0) + Math.floor(sum / 10);
    result[p2] = sum % 10;
    }
    }
    result[0] == 0 && result.shift();
    return result.join("");
   };



   const shortestPalindrome = function(s) {
    let index = 0;
    for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] === s[index]) index++;
    }
    if (index === s.length) return s;
    let remainingRev = s.substring(index, s.length);
    console.log(remainingRev);
    remainingRev = reverse(remainingRev);
  return remainingRev + shortestPalindrome(s.substring(0, index)) + s.substring(index);
  };
 

  const numberToWords = function(num) {
    let result = toHundreds(num % 1000);
    const bigNumbers = ["Thousand", "Million", "Billion"];
    for (let i = 0; i < 3; ++i) {
      num = Math.trunc(num / 1000);
      result = num % 1000 !== 0 ? [toHundreds(num % 1000), bigNumbers[i], result].filter(Boolean).join(" ") : result;
    }
    return result.length === 0 ? "Zero" : result;
  }
  function toHundreds(num) {
    const numbers = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
      "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    const result = Array(3).fill("");
    let a = Math.trunc(num / 100), b = num % 100, c = num % 10;
    result[0] = a > 0 && `${numbers[a]} Hundred`;
    result[1] = b < 20 ? numbers[b] : tens[Math.trunc(b / 10)]
    result[2] = b >= 20 && `${numbers[c]}`;
    return result.filter(Boolean).join(" ");
  }


  const canConstruct = function(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) return false;
    let magMap = new Map();
   for(let char of magazine) {
    magMap.set(char, (magMap.get(char) || 0 ) + 1);
    }
   for(let note of ransomNote) {
    let counter = magMap.get(note);
    if (!counter) return false;
   magMap.set(note - counter);
    }
    return true;
   };