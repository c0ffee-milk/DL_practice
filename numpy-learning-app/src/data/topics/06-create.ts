import type { Topic } from '../../types';

export const topic06: Topic = {
  id: '06-create',
  title: 'NumPy 创建数组',
  order: 6,
  category: 'basics',
  description: '学习使用各种函数创建 NumPy 数组。',
  content: {
    explanation: `<p>NumPy 提供了多种创建数组的方法：</p>
<ul>
<li><strong>empty()</strong> - 创建一个指定形状、数据类型且未初始化的数组</li>
<li><strong>zeros()</strong> - 创建指定大小的数组，数组元素以 0 来填充</li>
<li><strong>ones()</strong> - 创建指定形状的数组，数组元素以 1 来填充</li>
<li><strong>eye()</strong> - 创建单位矩阵</li>
<li><strong>full()</strong> - 创建填充指定值的数组</li>
</ul>`,
    keyPoints: [
      'empty() 创建未初始化数组（元素值为随机）',
      'zeros() 创建全 0 数组',
      'ones() 创建全 1 数组',
      'eye() 创建单位矩阵（对角线为1）',
      'full() 创建填充指定值的数组'
    ]
  },
  examples: [
    {
      id: 'create-1',
      title: 'zeros 和 ones',
      description: '创建全 0 和全 1 的数组',
      code: `import numpy as np

# 创建 2x3 的全 0 数组
zeros_arr = np.zeros((2, 3))
print("全 0 数组:")
print(zeros_arr)

# 创建 2x3 的全 1 数组
ones_arr = np.ones((2, 3), dtype=int)
print("\n全 1 数组:")
print(ones_arr)`,
      expectedOutput: `全 0 数组:
[[0. 0. 0.]
 [0. 0. 0.]]

全 1 数组:
[[1 1 1]
 [1 1 1]]`
    },
    {
      id: 'create-2',
      title: 'eye 和 full',
      description: '创建单位矩阵和填充数组',
      code: `import numpy as np

# 创建 3x3 单位矩阵
identity = np.eye(3)
print("单位矩阵:")
print(identity)

# 创建填充数组
full_arr = np.full((2, 2), 7)
print("\n填充数组 (全为 7):")
print(full_arr)`,
      expectedOutput: `单位矩阵:
[[1. 0. 0.]
 [0. 1. 0.]
 [0. 0. 1.]]

填充数组 (全为 7):
[[7 7]
 [7 7]]`
    }
  ],
  exercises: [
    {
      id: 'create-ex1',
      title: '创建特定形状数组',
      instructions: '创建一个 3x4 的全 0 数组和一个 4x4 的单位矩阵。',
      starterCode: `import numpy as np

# 创建 3x4 全 0 数组
zeros_3x4 = 
print("3x4 全 0 数组:")
print(zeros_3x4)

# 创建 4x4 单位矩阵
identity_4x4 = 
print("\n4x4 单位矩阵:")
print(identity_4x4)`,
      solution: `import numpy as np

zeros_3x4 = np.zeros((3, 4))
print("3x4 全 0 数组:")
print(zeros_3x4)

identity_4x4 = np.eye(4)
print("\n4x4 单位矩阵:")
print(identity_4x4)`,
      hints: ['zeros() 参数是一个元组表示形状', 'eye(n) 创建 nxn 单位矩阵']
    }
  ]
};