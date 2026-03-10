import type { Topic } from '../../types';

export const topic19: Topic = {
  id: '19-sorting',
  title: '排序、条件筛选函数',
  order: 19,
  category: 'functions',
  description: '学习 NumPy 的排序和条件筛选函数。',
  content: {
    explanation: `<p>NumPy 提供了以下排序和筛选函数：</p>
<ul>
<li><strong>sort</strong> - 返回排序后的数组</li>
<li><strong>argsort</strong> - 返回排序后的索引</li>
<li><strong>lexsort</strong> - 多列排序</li>
<li><strong>argmax/argmin</strong> - 返回最大/最小值的索引</li>
<li><strong>where</strong> - 根据条件返回索引或值</li>
<li><strong>extract</strong> - 根据条件提取元素</li>
<li><strong>nonzero</strong> - 返回非零元素索引</li>
</ul>`,
    keyPoints: [
      'sort 默认返回升序排列',
      'argsort 返回排序后的原索引',
      'where 类似于三元运算符',
      '可以用 axis 参数指定排序轴'
    ]
  },
  examples: [
    {
      id: 'sort-1',
      title: '数组排序',
      description: '对数组进行排序',
      code: `import numpy as np

arr = np.array([3, 1, 4, 1, 5, 9, 2, 6])

print("原数组:", arr)
print("排序后:", np.sort(arr))
print("排序索引:", np.argsort(arr))
print("最大值索引:", np.argmax(arr))`,
      expectedOutput: `原数组: [3 1 4 1 5 9 2 6]
排序后: [1 1 2 3 4 5 6 9]
排序索引: [1 3 6 0 2 4 7 5]
最大值索引: 5`
    },
    {
      id: 'sort-2',
      title: 'where 函数',
      description: '使用 where 进行条件筛选',
      code: `import numpy as np

arr = np.array([1, 2, 3, 4, 5])

# 大于3的元素乘以2，否则保持不变
result = np.where(arr > 3, arr * 2, arr)
print("条件操作结果:", result)

# 获取满足条件的索引
indices = np.where(arr > 3)
print("满足条件的索引:", indices)`,
      expectedOutput: `条件操作结果: [ 1  2  3  8 10]
满足条件的索引: (array([3, 4]),)`
    }
  ],
  exercises: [
    {
      id: 'sort-ex1',
      title: '使用 where 函数',
      instructions: '将数组中的负数替换为 0，正数保持不变。',
      starterCode: `import numpy as np

arr = np.array([-1, 2, -3, 4, -5])
# 负数替换为0
result = 
print(result)`,
      solution: `import numpy as np

arr = np.array([-1, 2, -3, 4, -5])
result = np.where(arr < 0, 0, arr)
print(result)`,
      hints: ['使用 np.where(条件, 真值, 假值)', '条件是 arr < 0']
    }
  ]
};