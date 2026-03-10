import type { Topic } from '../../types';

export const topic05: Topic = {
  id: '05-attributes',
  title: 'NumPy 数组属性',
  order: 5,
  category: 'basics',
  description: '学习如何查看和操作 NumPy 数组的各种属性。',
  content: {
    explanation: `<p>NumPy 数组（ndarray）对象拥有以下重要属性：</p>
<ul>
<li><strong>ndim</strong> - 返回数组的维度数（轴数）</li>
<li><strong>shape</strong> - 返回一个元组，表示数组在各维度上的大小</li>
<li><strong>size</strong> - 返回数组元素的总数</li>
<li><strong>dtype</strong> - 返回数组元素的数据类型</li>
<li><strong>itemsize</strong> - 返回每个元素占用的字节数</li>
<li><strong>flags</strong> - 返回数组的内存信息</li>
</ul>`,
    keyPoints: [
      'ndim 返回数组的维度数量',
      'shape 返回各维度大小的元组',
      'size 返回元素总数（等于 shape 各元素乘积）',
      'dtype 返回元素的数据类型'
    ]
  },
  examples: [
    {
      id: 'attr-1',
      title: '查看数组属性',
      description: '创建一个二维数组并查看其各种属性',
      code: `import numpy as np

a = np.array([[1, 2, 3], [4, 5, 6]])

print("数组:")
print(a)
print("维度数 (ndim):", a.ndim)
print("形状 (shape):", a.shape)
print("元素总数 (size):", a.size)
print("数据类型 (dtype):", a.dtype)
print("每个元素字节数 (itemsize):", a.itemsize)`,
      expectedOutput: `数组:
[[1 2 3]
 [4 5 6]]
维度数 (ndim): 2
形状 (shape): (2, 3)
元素总数 (size): 6
数据类型 (dtype): int64
每个元素字节数 (itemsize): 8`
    }
  ],
  exercises: [
    {
      id: 'attr-ex1',
      title: '三维数组属性',
      instructions: '创建一个 3x3x3 的三维数组，打印其 ndim、shape 和 size。',
      starterCode: `import numpy as np

arr = np.arange(27).reshape(3, 3, 3)
# 打印属性

`,
      solution: `import numpy as np

arr = np.arange(27).reshape(3, 3, 3)
print("ndim:", arr.ndim)
print("shape:", arr.shape)
print("size:", arr.size)`,
      hints: ['使用 arange 和 reshape 创建数组', 'ndim 应该是 3', 'shape 应该是 (3, 3, 3)', 'size 应该是 27']
    }
  ]
};