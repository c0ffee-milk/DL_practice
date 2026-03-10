import type { Topic } from '../../types';

export const topic23: Topic = {
  id: '23-linalg',
  title: '线性代数',
  order: 23,
  category: 'advanced',
  description: '学习 NumPy 的线性代数运算。',
  content: {
    explanation: `<p>NumPy 的 linalg 模块提供了线性代数运算：</p>
<ul>
<li><strong>dot</strong> - 矩阵乘法</li>
<li><strong>vdot</strong> - 向量点积</li>
<li><strong>inner/outer</strong> - 内积/外积</li>
<li><strong>det</strong> - 行列式</li>
<li><strong>solve</strong> - 解线性方程组</li>
<li><strong>inv</strong> - 矩阵求逆</li>
<li><strong>eig</strong> - 特征值和特征向量</li>
<li><strong>svd</strong> - 奇异值分解</li>
</ul>`,
    keyPoints: [
      'linalg 模块提供完整的线性代数功能',
      'dot 和 @ 运算符都可用于矩阵乘法',
      'solve 用于解 Ax = b',
      'svd 是常用的矩阵分解方法'
    ]
  },
  examples: [
    {
      id: 'linalg-1',
      title: '矩阵求逆和解方程',
      description: '求逆矩阵和解线性方程组',
      code: `import numpy as np

A = np.array([[3, 1], [1, 2]])
b = np.array([9, 8])

print("矩阵 A:")
print(A)

# 求逆矩阵
A_inv = np.linalg.inv(A)
print("\nA 的逆矩阵:")
print(A_inv)

# 解方程 Ax = b
x = np.linalg.solve(A, b)
print("\n方程的解 x:")
print(x)

# 验证
print("\n验证 A @ x:")
print(A @ x)`,
      expectedOutput: `矩阵 A:
[[3 1]
 [1 2]]

A 的逆矩阵:
[[ 0.4 -0.2]
 [-0.2  0.6]]

方程的解 x:
[2. 3.]

验证 A @ x:
[9. 8.]`
    }
  ],
  exercises: [
    {
      id: 'linalg-ex1',
      title: '计算行列式',
      instructions: '计算矩阵 [[1, 2], [3, 4]] 的行列式。',
      starterCode: `import numpy as np

A = np.array([[1, 2], [3, 4]])
# 计算行列式
det = 
print("行列式:", det)`,
      solution: `import numpy as np

A = np.array([[1, 2], [3, 4]])
det = np.linalg.det(A)
print("行列式:", det)`,
      hints: ['使用 np.linalg.det() 计算行列式']
    }
  ]
};