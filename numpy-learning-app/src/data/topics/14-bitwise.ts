import type { Topic } from '../../types';

export const topic14: Topic = {
  id: '14-bitwise',
  title: '位运算',
  order: 14,
  category: 'indexing',
  description: '学习 NumPy 的位运算函数。',
  content: {
    explanation: `<p>NumPy 提供了以下位运算函数：</p>
<ul>
<li><strong>bitwise_and</strong> - 按位与</li>
<li><strong>bitwise_or</strong> - 按位或</li>
<li><strong>bitwise_xor</strong> - 按位异或</li>
<li><strong>invert</strong> - 按位取反</li>
<li><strong>left_shift</strong> - 左移位</li>
<li><strong>right_shift</strong> - 右移位</li>
</ul>`,
    keyPoints: [
      '位运算对整数数组的每个元素进行操作',
      '可以使用运算符 & | ~ ^ << >>',
      '位运算常用于掩码操作',
      'invert 等价于 ~ 运算符'
    ]
  },
  examples: [
    {
      id: 'bitwise-1',
      title: '按位与和或',
      description: '使用 bitwise_and 和 bitwise_or',
      code: `import numpy as np

a = np.array([0, 1, 2, 3])  # 二进制: 00, 01, 10, 11
b = np.array([1, 1, 1, 1])  # 二进制: 01, 01, 01, 01

print("a:", a)
print("b:", b)
print("a & b (按位与):", np.bitwise_and(a, b))
print("a | b (按位或):", np.bitwise_or(a, b))`,
      expectedOutput: `a: [0 1 2 3]
b: [1 1 1 1]
a & b (按位与): [0 1 0 1]
a | b (按位或): [1 1 3 3]`
    }
  ],
  exercises: [
    {
      id: 'bitwise-ex1',
      title: '位运算练习',
      instructions: '使用位运算提取数组中的奇数元素。',
      starterCode: `import numpy as np

arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
# 使用位运算提取奇数
# 奇数的二进制最低位是 1
odd_numbers = 
print(odd_numbers)`,
      solution: `import numpy as np

arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
# 与 1 进行按位与运算，结果为 1 的是奇数
odd_numbers = arr[np.bitwise_and(arr, 1) == 1]
print(odd_numbers)`,
      hints: ['奇数 & 1 = 1', '偶数 & 1 = 0', '使用布尔索引筛选']
    }
  ]
};