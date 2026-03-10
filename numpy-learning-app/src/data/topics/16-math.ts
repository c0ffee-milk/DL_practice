import type { Topic } from '../../types';

export const topic16: Topic = {
  id: '16-math',
  title: '数学函数',
  order: 16,
  category: 'functions',
  description: '学习 NumPy 提供的各种数学函数。',
  content: {
    explanation: `<p>NumPy 提供了丰富的数学函数：</p>
<ul>
<li><strong>三角函数</strong> - sin, cos, tan, arcsin, arccos, arctan</li>
<li><strong>指数对数</strong> - exp, log, log10, log2</li>
<li><strong>舍入函数</strong> - round, floor, ceil, trunc</li>
<li><strong>其他</strong> - sqrt, power, absolute, sign</li>
</ul>`,
    keyPoints: [
      '数学函数对数组每个元素进行操作',
      '三角函数使用弧度制',
      '支持广播机制',
      '比 Python 内置 math 模块更高效'
    ]
  },
  examples: [
    {
      id: 'math-1',
      title: '三角函数',
      description: '使用三角函数',
      code: `import numpy as np

arr = np.array([0, np.pi/2, np.pi])

print("数组:", arr)
print("sin:", np.sin(arr))
print("cos:", np.cos(arr))`,
      expectedOutput: `数组: [0.         1.57079633 3.14159265]
sin: [0.0000000e+00 1.0000000e+00 1.2246468e-16]
cos: [ 1.000000e+00  6.123234e-17 -1.000000e+00]`
    },
    {
      id: 'math-2',
      title: '指数和对数',
      description: '使用指数和对数函数',
      code: `import numpy as np

arr = np.array([1, 2, 3, 4, 5])

print("原数组:", arr)
print("exp:", np.exp(arr))
print("sqrt:", np.sqrt(arr))`,
      expectedOutput: `原数组: [1 2 3 4 5]
exp: [  2.71828183   7.3890561   20.08553692  54.59815003 148.4131591 ]
sqrt: [1.         1.41421356 1.73205081 2.         2.23606798]`
    }
  ],
  exercises: [
    {
      id: 'math-ex1',
      title: '计算平方和开方',
      instructions: '对数组 [1, 4, 9, 16, 25] 计算平方根。',
      starterCode: `import numpy as np

arr = np.array([1, 4, 9, 16, 25])
# 计算平方根
result = 
print(result)`,
      solution: `import numpy as np

arr = np.array([1, 4, 9, 16, 25])
result = np.sqrt(arr)
print(result)`,
      hints: ['使用 np.sqrt() 函数计算平方根']
    }
  ]
};