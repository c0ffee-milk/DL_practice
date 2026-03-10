import type { Topic } from '../../types';

export const topic03: Topic = {
  id: '03-ndarray',
  title: 'NumPy Ndarray 对象',
  order: 3,
  category: 'basics',
  description: '学习 NumPy 最核心的 ndarray 对象及其基本用法。',
  content: {
    explanation: `<p>NumPy 最重要的一个特点是其 N 维数组对象 ndarray，它是一系列同类型数据的集合，以 0 下标为开始进行集合中元素的索引。</p>
<p>ndarray 对象是用于存放同类型元素的多维数组。</p>
<p><strong>ndarray 内部由以下内容组成：</strong></p>
<ul>
<li>一个指向数据（内存或内存映射文件中的一块数据）的指针</li>
<li>数据类型或 dtype，描述在数组中的固定大小值的格子</li>
<li>一个表示数组形状（shape）的元组，表示各维度大小的元组</li>
<li>一个跨度元组（stride），其中的整数指的是为了前进到当前维度下一个元素需要"跨过"的字节数</li>
</ul>`,
    keyPoints: [
      'ndarray 是 NumPy 的核心数据结构',
      'ndarray 要求元素类型相同',
      '支持任意维度的数组',
      '使用 np.array() 从列表创建数组'
    ]
  },
  examples: [
    {
      id: 'ndarray-1',
      title: '创建一维数组',
      description: '从 Python 列表创建一维 NumPy 数组',
      code: `import numpy as np

# 从列表创建一维数组
a = np.array([1, 2, 3, 4, 5])
print("数组:", a)
print("类型:", type(a))`,
      expectedOutput: `数组: [1 2 3 4 5]
类型: <class 'numpy.ndarray'>`
    },
    {
      id: 'ndarray-2',
      title: '创建二维数组',
      description: '从嵌套列表创建二维数组（矩阵）',
      code: `import numpy as np

# 创建二维数组
b = np.array([[1, 2, 3], [4, 5, 6]])
print("二维数组:")
print(b)
print("形状:", b.shape)`,
      expectedOutput: `二维数组:
[[1 2 3]
 [4 5 6]]
形状: (2, 3)`
    }
  ],
  exercises: [
    {
      id: 'ndarray-ex1',
      title: '创建三维数组',
      instructions: '创建一个 2x2x2 的三维数组，包含数字 1 到 8。',
      starterCode: `import numpy as np

# 创建 2x2x2 的三维数组
arr = 
print(arr)`,
      solution: `import numpy as np

arr = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])
print(arr)`,
      hints: ['使用嵌套列表创建三维结构', '第一层 2 个元素，每个元素包含 2x2 的矩阵']
    },
    {
      id: 'ndarray-ex2',
      title: '数组属性探索',
      instructions: '创建一个数组，然后打印它的 ndim、shape、size 和 dtype 属性。',
      starterCode: `import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])
# 打印各种属性

`,
      solution: `import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])
print("ndim:", arr.ndim)
print("shape:", arr.shape)
print("size:", arr.size)
print("dtype:", arr.dtype)`,
      hints: ['ndim 返回维度数', 'shape 返回各维度大小', 'size 返回元素总数', 'dtype 返回数据类型']
    }
  ]
};