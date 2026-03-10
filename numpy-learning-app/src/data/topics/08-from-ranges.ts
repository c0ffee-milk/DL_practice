import type { Topic } from '../../types';

export const topic08: Topic = {
  id: '08-from-ranges',
  title: '从数值范围创建数组',
  order: 8,
  category: 'creation',
  description: '学习使用 arange、linspace 等函数从数值范围创建数组。',
  content: {
    explanation: `<p>NumPy 提供了以下函数从数值范围创建数组：</p>
<ul>
<li><strong>arange(start, stop, step)</strong> - 类似于 Python 的 range()，返回 ndarray</li>
<li><strong>linspace(start, stop, num)</strong> - 创建等差数列，指定元素个数</li>
<li><strong>logspace(start, stop, num)</strong> - 创建等比数列（对数刻度）</li>
</ul>`,
    keyPoints: [
      'arange() 类似 range()，参数为 start, stop, step',
      'linspace() 包含 stop 值，指定元素个数',
      'logspace() 创建对数等比数列',
      'arange() 不包含 stop 值'
    ]
  },
  examples: [
    {
      id: 'range-1',
      title: 'arange 函数',
      description: '使用 arange 创建数值序列',
      code: `import numpy as np

# 0 到 9
a = np.arange(10)
print("0-9:", a)

# 2 到 8，步长为 2
b = np.arange(2, 10, 2)
print("2-8 步长 2:", b)

# 0 到 1，步长 0.2
c = np.arange(0, 1, 0.2)
print("0-1 步长 0.2:", c)`,
      expectedOutput: `0-9: [0 1 2 3 4 5 6 7 8 9]
2-8 步长 2: [2 4 6 8]
0-1 步长 0.2: [0.  0.2 0.4 0.6 0.8]`
    },
    {
      id: 'range-2',
      title: 'linspace 函数',
      description: '使用 linspace 创建等差数列',
      code: `import numpy as np

# 0 到 1，包含 5 个元素
a = np.linspace(0, 1, 5)
print("0-1 共 5 个元素:")
print(a)

# 0 到 10，包含 11 个元素
b = np.linspace(0, 10, 11)
print("\n0-10 共 11 个元素:")
print(b)`,
      expectedOutput: `0-1 共 5 个元素:
[0.   0.25 0.5  0.75 1.  ]

0-10 共 11 个元素:
[ 0.  1.  2.  3.  4.  5.  6.  7.  8.  9. 10.]`
    }
  ],
  exercises: [
    {
      id: 'range-ex1',
      title: '创建偶数数组',
      instructions: '使用 arange() 创建一个包含 0 到 20 所有偶数的数组。',
      starterCode: `import numpy as np

# 创建 0 到 20 的偶数数组
evens = 
print(evens)`,
      solution: `import numpy as np

evens = np.arange(0, 21, 2)
print(evens)`,
      hints: ['起始值是 0', '终止值应该是 21（因为不包含）', '步长是 2']
    },
    {
      id: 'range-ex2',
      title: '等间隔数组',
      instructions: '使用 linspace() 创建从 0 到 100 包含 11 个等间隔数字的数组。',
      starterCode: `import numpy as np

# 创建 0 到 100 的 11 个等间隔数字
arr = 
print(arr)`,
      solution: `import numpy as np

arr = np.linspace(0, 100, 11)
print(arr)`,
      hints: ['linspace(开始, 结束, 元素个数)', '包含结束值']
    }
  ]
};