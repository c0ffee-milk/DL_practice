import type { Topic } from '../../types';

export const topic10: Topic = {
  id: '10-advanced-indexing',
  title: '高级索引',
  order: 10,
  category: 'indexing',
  description: '学习 NumPy 的高级索引技巧，包括整数数组索引和布尔索引。',
  content: {
    explanation: `<p>NumPy 的高级索引包括：</p>
<ul>
<li><strong>整数数组索引</strong> - 使用数组作为索引来选择元素</li>
<li><strong>布尔索引</strong> - 使用布尔数组过滤元素</li>
<li><strong>花式索引</strong> - 使用索引数组访问多个元素</li>
</ul>`,
    keyPoints: [
      '整数数组索引可以选择多个不连续的元素',
      '布尔索引可以根据条件过滤数组',
      '花式索引返回的是拷贝而非视图',
      '可以组合使用多种索引方式'
    ]
  },
  examples: [
    {
      id: 'advidx-1',
      title: '布尔索引',
      description: '使用布尔条件过滤数组元素',
      code: `import numpy as np

a = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

# 筛选大于5的元素
mask = a > 5
print("大于5的元素:", a[mask])

# 筛选偶数
even_mask = a % 2 == 0
print("偶数:", a[even_mask])`,
      expectedOutput: `大于5的元素: [ 6  7  8  9 10]
偶数: [ 2  4  6  8 10]`
    },
    {
      id: 'advidx-2',
      title: '整数数组索引',
      description: '使用整数数组选择特定元素',
      code: `import numpy as np

a = np.array([10, 20, 30, 40, 50])

# 选择第1、3、5个元素
indices = [0, 2, 4]
print("选择的元素:", a[indices])

# 二维数组花式索引
b = np.array([[1, 2], [3, 4], [5, 6]])
print("\n选择的行:")
print(b[[0, 2]])`,
      expectedOutput: `选择的元素: [10 30 50]

选择的行:
[[1 2]
 [5 6]]`
    }
  ],
  exercises: [
    {
      id: 'advidx-ex1',
      title: '条件筛选',
      instructions: '从数组中筛选出所有大于 10 且小于 40 的元素。',
      starterCode: `import numpy as np

arr = np.array([5, 15, 25, 35, 45, 55])
# 筛选大于10且小于40的元素
result = 
print(result)`,
      solution: `import numpy as np

arr = np.array([5, 15, 25, 35, 45, 55])
result = arr[(arr > 10) & (arr < 40)]
print(result)`,
      hints: ['使用布尔索引', '使用 & 连接多个条件', '每个条件要用括号包围']
    }
  ]
};