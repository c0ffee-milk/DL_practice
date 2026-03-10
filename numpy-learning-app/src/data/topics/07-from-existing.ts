import type { Topic } from '../../types';

export const topic07: Topic = {
  id: '07-from-existing',
  title: '从已有的数组创建数组',
  order: 7,
  category: 'creation',
  description: '学习如何基于现有数组创建新的 NumPy 数组。',
  content: {
    explanation: `<p>NumPy 提供了以下方法从现有数据创建数组：</p>
<ul>
<li><strong>asarray()</strong> - 将输入转换为 ndarray，如果输入已经是 ndarray 则不复制</li>
<li><strong>frombuffer()</strong> - 从缓冲区创建数组</li>
<li><strong>fromiter()</strong> - 从可迭代对象创建数组</li>
<li><strong>fromstring()</strong> - 从字符串创建数组</li>
</ul>`,
    keyPoints: [
      'asarray() 类似 array() 但避免不必要的复制',
      'frombuffer() 用于二进制数据',
      'fromiter() 从迭代器创建数组',
      'asarray() 是最常用的方法'
    ]
  },
  examples: [
    {
      id: 'fromexist-1',
      title: 'asarray 用法',
      description: '使用 asarray 从列表创建数组',
      code: `import numpy as np

# 从列表创建
list_data = [1, 2, 3, 4, 5]
arr = np.asarray(list_data)
print("从列表创建:", arr)

# 从元组创建
tuple_data = (6, 7, 8, 9, 10)
arr2 = np.asarray(tuple_data)
print("从元组创建:", arr2)`,
      expectedOutput: `从列表创建: [1 2 3 4 5]
从元组创建: [ 6  7  8  9 10]`
    }
  ],
  exercises: [
    {
      id: 'fromexist-ex1',
      title: 'asarray 实践',
      instructions: '使用 asarray() 将一个 Python 列表转换为 NumPy 数组。',
      starterCode: `import numpy as np

my_list = [10, 20, 30, 40, 50]
# 转换为 NumPy 数组
arr = 
print(arr)
print(type(arr))`,
      solution: `import numpy as np

my_list = [10, 20, 30, 40, 50]
arr = np.asarray(my_list)
print(arr)
print(type(arr))`,
      hints: ['使用 np.asarray() 函数', '传入列表作为参数']
    }
  ]
};