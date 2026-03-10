import type { Topic } from '../../types';

export const topic09: Topic = {
  id: '09-slicing',
  title: '切片和索引',
  order: 9,
  category: 'indexing',
  description: '学习 NumPy 数组的切片和索引操作。',
  content: {
    explanation: `<p>NumPy 数组的切片和索引与 Python 列表类似，但功能更强大：</p>
<ul>
<li><strong>基础索引</strong> - 使用整数索引访问单个元素</li>
<li><strong>切片 [start:stop:step]</strong> - 获取子数组</li>
<li><strong>多维索引</strong> - 使用逗号分隔多个维度的索引</li>
<li><strong>省略号 ...</strong> - 表示剩余所有维度</li>
</ul>`,
    keyPoints: [
      '切片语法: [start:stop:step]',
      '多维数组使用逗号分隔索引: arr[i, j]',
      '冒号 : 表示取该维度所有元素',
      '负数索引从末尾开始计数'
    ]
  },
  examples: [
    {
      id: 'slice-1',
      title: '一维数组切片',
      description: '对一维数组进行切片操作',
      code: `import numpy as np

a = np.array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

print("原数组:", a)
print("前5个元素:", a[:5])
print("后5个元素:", a[-5:])
print("步长为2:", a[::2])
print("反转数组:", a[::-1])`,
      expectedOutput: `原数组: [0 1 2 3 4 5 6 7 8 9]
前5个元素: [0 1 2 3 4]
后5个元素: [5 6 7 8 9]
步长为2: [0 2 4 6 8]
反转数组: [9 8 7 6 5 4 3 2 1 0]`
    },
    {
      id: 'slice-2',
      title: '二维数组切片',
      description: '对二维数组进行切片操作',
      code: `import numpy as np

a = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

print("原数组:")
print(a)
print("\n第1行:", a[0])
print("第2列:", a[:, 1])
print("子矩阵 (前2行, 后2列):")
print(a[:2, 1:])`,
      expectedOutput: `原数组:
[[1 2 3]
 [4 5 6]
 [7 8 9]]

第1行: [1 2 3]
第2列: [2 5 8]
子矩阵 (前2行, 后2列):
[[2 3]
 [5 6]]`
    }
  ],
  exercises: [
    {
      id: 'slice-ex1',
      title: '提取子数组',
      instructions: '从数组中提取第2到第5个元素（索引1到4）。',
      starterCode: `import numpy as np

arr = np.array([10, 20, 30, 40, 50, 60, 70])
# 提取第2到第5个元素
result = 
print(result)`,
      solution: `import numpy as np

arr = np.array([10, 20, 30, 40, 50, 60, 70])
result = arr[1:5]
print(result)`,
      hints: ['使用切片 arr[1:5]', '包含索引1，不包含索引5']
    },
    {
      id: 'slice-ex2',
      title: '二维数组元素提取',
      instructions: '创建一个3x3数组，提取第二行的所有元素。',
      starterCode: `import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
# 提取第二行
row2 = 
print(row2)`,
      solution: `import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
row2 = arr[1]
print(row2)`,
      hints: ['索引从0开始，第二行索引是1', '使用 arr[1] 获取整行']
    }
  ]
};