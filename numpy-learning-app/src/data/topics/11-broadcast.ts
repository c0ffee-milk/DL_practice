import type { Topic } from '../../types';

export const topic11: Topic = {
  id: '11-broadcast',
  title: 'NumPy 广播',
  order: 11,
  category: 'indexing',
  description: '理解 NumPy 的广播机制，这是数组运算的核心特性。',
  content: {
    explanation: `<p>广播（Broadcast）是 NumPy 对不同形状数组进行算术运算的方式。</p>
<p><strong>广播规则：</strong></p>
<ol>
<li>如果两个数组维数不同，将形状较小的数组在前面补1，直到维数相同</li>
<li>如果两个数组在某个维度上的大小相同，或其中一个为1，则可以广播</li>
<li>如果两个数组在所有维度上都满足广播条件，则可以进行运算</li>
</ol>`,
    keyPoints: [
      '广播允许不同形状的数组进行运算',
      '较小数组会沿着较大数组的维度"扩展"',
      '广播是虚拟复制，不实际复制数据',
      '可以简化很多数组运算代码'
    ]
  },
  examples: [
    {
      id: 'broadcast-1',
      title: '标量广播',
      description: '数组与标量的运算',
      code: `import numpy as np

a = np.array([1, 2, 3, 4])

# 数组与标量相加
print("数组 + 10:", a + 10)

# 数组与标量相乘
print("数组 * 2:", a * 2)`,
      expectedOutput: `数组 + 10: [11 12 13 14]
数组 * 2: [2 4 6 8]`
    },
    {
      id: 'broadcast-2',
      title: '二维数组广播',
      description: '不同形状数组的广播',
      code: `import numpy as np

# 2D 数组 + 1D 数组
a = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
b = np.array([10, 20, 30])

print("a + b:")
print(a + b)

# 列向量广播
c = np.array([[1], [2], [3]])
print("\na + c:")
print(a + c)`,
      expectedOutput: `a + b:
[[11 22 33]
 [14 25 36]
 [17 28 39]]

a + c:
[[ 2  3  4]
 [ 6  7  8]
 [10 11 12]]`
    }
  ],
  exercises: [
    {
      id: 'broadcast-ex1',
      title: '广播练习',
      instructions: '使用广播机制，将二维数组的每一行分别乘以 [1, 10, 100]。',
      starterCode: `import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])
multiplier = np.array([1, 10, 100])
# 使用广播进行乘法
result = 
print(result)`,
      solution: `import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])
multiplier = np.array([1, 10, 100])
result = arr * multiplier
print(result)`,
      hints: ['直接使用 * 运算符即可', '广播会自动处理形状差异']
    }
  ]
};