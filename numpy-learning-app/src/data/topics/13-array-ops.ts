import type { Topic } from '../../types';

export const topic13: Topic = {
  id: '13-array-ops',
  title: '数组操作',
  order: 13,
  category: 'indexing',
  description: '学习数组形状修改、转置、连接等常用操作。',
  content: {
    explanation: `<p>NumPy 提供了丰富的数组操作函数：</p>
<ul>
<li><strong>reshape</strong> - 修改数组形状，不改变数据</li>
<li><strong>flatten/ravel</strong> - 展平数组为一维</li>
<li><strong>transpose/T</strong> - 数组转置</li>
<li><strong>concatenate/vstack/hstack</strong> - 连接数组</li>
<li><strong>split/hsplit/vsplit</strong> - 分割数组</li>
<li><strong>resize</strong> - 修改数组形状和大小</li>
</ul>`,
    keyPoints: [
      'reshape 返回视图或拷贝，取决于具体情况',
      'flatten 返回拷贝，ravel 返回视图',
      'T 属性是 transpose 的简写',
      'vstack 垂直连接，hstack 水平连接'
    ]
  },
  examples: [
    {
      id: 'ops-1',
      title: 'reshape 和转置',
      description: '修改数组形状和转置',
      code: `import numpy as np

a = np.arange(12)
print("原数组:", a)

# reshape
b = a.reshape(3, 4)
print("\nreshape(3, 4):")
print(b)

# 转置
print("\n转置:")
print(b.T)`,
      expectedOutput: `原数组: [ 0  1  2  3  4  5  6  7  8  9 10 11]

reshape(3, 4):
[[ 0  1  2  3]
 [ 4  5  6  7]
 [ 8  9 10 11]]

转置:
[[ 0  4  8]
 [ 1  5  9]
 [ 2  6 10]
 [ 3  7 11]]`
    },
    {
      id: 'ops-2',
      title: '连接数组',
      description: '使用 concatenate 和 stack 连接数组',
      code: `import numpy as np

a = np.array([[1, 2], [3, 4]])
b = np.array([[5, 6], [7, 8]])

print("水平连接 (hstack):")
print(np.hstack((a, b)))

print("\n垂直连接 (vstack):")
print(np.vstack((a, b)))`,
      expectedOutput: `水平连接 (hstack):
[[1 2 5 6]
 [3 4 7 8]]

垂直连接 (vstack):
[[1 2]
 [3 4]
 [5 6]
 [7 8]]`
    }
  ],
  exercises: [
    {
      id: 'ops-ex1',
      title: 'reshape 练习',
      instructions: '将一维数组 [0,1,2,3,4,5] 重塑为 2x3 的二维数组。',
      starterCode: `import numpy as np

arr = np.array([0, 1, 2, 3, 4, 5])
# 重塑为 2x3
reshaped = 
print(reshaped)`,
      solution: `import numpy as np

arr = np.array([0, 1, 2, 3, 4, 5])
reshaped = arr.reshape(2, 3)
print(reshaped)`,
      hints: ['使用 reshape(2, 3) 方法', '形状参数是 (行数, 列数)']
    }
  ]
};