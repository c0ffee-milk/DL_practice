import type { Topic } from '../../types';

export const topic22: Topic = {
  id: '22-matrix',
  title: '矩阵库 (Matrix)',
  order: 22,
  category: 'advanced',
  description: '学习 NumPy 的矩阵库和矩阵运算。',
  content: {
    explanation: `<p>NumPy 的 matrix 是 ndarray 的子类，专门用于矩阵运算：</p>
<ul>
<li><strong>创建矩阵</strong> - 使用 np.matrix 或 np.mat</li>
<li><strong>矩阵乘法</strong> - * 运算符表示矩阵乘法（不是元素乘）</li>
<li><strong>转置</strong> - .T 属性</li>
<li><strong>逆矩阵</strong> - .I 属性</li>
</ul>
<p>注意：官方推荐使用二维 ndarray 配合 @ 运算符或 matmul 函数进行矩阵乘法。</p>`,
    keyPoints: [
      'matrix 是 ndarray 的子类',
      '* 运算符在 matrix 中表示矩阵乘法',
      'matrix 只支持二维',
      '现代代码推荐用 ndarray + @ 运算符'
    ]
  },
  examples: [
    {
      id: 'matrix-1',
      title: '矩阵创建和运算',
      description: '创建矩阵并进行基本运算',
      code: `import numpy as np

# 创建矩阵
A = np.matrix([[1, 2], [3, 4]])
B = np.matrix([[5, 6], [7, 8]])

print("矩阵 A:")
print(A)
print("\n矩阵 B:")
print(B)

# 矩阵乘法
print("\nA * B (矩阵乘法):")
print(A * B)

# 转置
print("\nA 的转置:")
print(A.T)`,
      expectedOutput: `矩阵 A:
[[1 2]
 [3 4]]

矩阵 B:
[[5 6]
 [7 8]]

A * B (矩阵乘法):
[[19 22]
 [43 50]]

A 的转置:
[[1 3]
 [2 4]]`
    }
  ],
  exercises: [
    {
      id: 'matrix-ex1',
      title: '矩阵乘法',
      instructions: '创建两个 2x2 矩阵，计算它们的矩阵乘积。',
      starterCode: `import numpy as np

A = np.matrix([[1, 2], [3, 4]])
B = np.matrix([[2, 0], [1, 2]])

# 计算矩阵乘积
C = 
print(C)`,
      solution: `import numpy as np

A = np.matrix([[1, 2], [3, 4]])
B = np.matrix([[2, 0], [1, 2]])

C = A * B
print(C)`,
      hints: ['使用 * 运算符进行矩阵乘法', '注意矩阵乘法的维度要求']
    }
  ]
};