import type { Topic } from '../../types';

export const topic12: Topic = {
  id: '12-iteration',
  title: '迭代数组',
  order: 12,
  category: 'indexing',
  description: '学习如何遍历 NumPy 数组中的元素。',
  content: {
    explanation: `<p>NumPy 提供了多种迭代数组的方式：</p>
<ul>
<li><strong>for 循环</strong> - 直接遍历数组元素</li>
<li><strong㰀diter</strong> - 高效的多维数组迭代器</li>
<li><strong>flat</strong> - 返回一维迭代器</li>
<li><strong>ndenumerate</strong> - 带索引的迭代</li>
</ul>`,
    keyPoints: [
      'for 循环遍历数组会按第一维迭代',
      'nditer 是最高效的数组迭代器',
      'flat 属性可以展平数组后迭代',
      '应避免对大型数组使用 Python 循环'
    ]
  },
  examples: [
    {
      id: 'iter-1',
      title: '基础迭代',
      description: '使用 for 循环遍历数组',
      code: `import numpy as np

a = np.array([[1, 2, 3], [4, 5, 6]])

print("遍历二维数组:")
for row in a:
    print(row)

print("\n遍历每个元素:")
for row in a:
    for item in row:
        print(item, end=' ')
print()`,
      expectedOutput: `遍历二维数组:
[1 2 3]
[4 5 6]

遍历每个元素:
1 2 3 4 5 6`
    },
    {
      id: 'iter-2',
      title: '使用 nditer',
      description: '使用 nditer 高效迭代数组',
      code: `import numpy as np

a = np.array([[1, 2], [3, 4]])

print("使用 nditer:")
for x in np.nditer(a):
    print(x, end=' ')
print()

print("\n使用 flat:")
for x in a.flat:
    print(x, end=' ')
print()`,
      expectedOutput: `使用 nditer:
1 2 3 4 

使用 flat:
1 2 3 4`
    }
  ],
  exercises: [
    {
      id: 'iter-ex1',
      title: '计算数组元素和',
      instructions: '使用迭代计算数组中所有元素的和（不使用 sum() 函数）。',
      starterCode: `import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])
# 计算元素和
total = 0


print("总和:", total)`,
      solution: `import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])
total = 0
for x in np.nditer(arr):
    total += x
print("总和:", total)`,
      hints: ['使用 np.nditer(arr) 迭代数组', '累加每个元素到 total']
    }
  ]
};