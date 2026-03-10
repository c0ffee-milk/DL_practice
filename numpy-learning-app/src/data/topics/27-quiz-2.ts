import type { Topic } from '../../types';

export const topic27: Topic = {
  id: '27-quiz-2',
  title: '测验 2: 索引与操作',
  order: 27,
  category: 'quiz',
  description: '测试 NumPy 索引和数组操作掌握情况。',
  content: {
    explanation: `<p>本测验涵盖 NumPy 索引和操作：</p>
<ul>
<li>切片和索引</li>
<li>高级索引</li>
<li>广播机制</li>
<li>数组操作</li>
</ul>`,
    keyPoints: [
      '检查对切片和索引的理解',
      '验证广播机制的运用',
      '测试数组变形操作'
    ]
  },
  examples: [],
  exercises: [
    {
      id: 'quiz2-1',
      title: '测验题 1',
      instructions: '从数组 [1,2,3,4,5,6,7,8,9,10] 中提取第3到第7个元素。',
      starterCode: `import numpy as np

arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
result = 
print(result)`,
      solution: `import numpy as np

arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
result = arr[2:7]
print(result)`,
      hints: ['使用切片 arr[2:7]', '索引从0开始']
    },
    {
      id: 'quiz2-2',
      title: '测验题 2',
      instructions: '从数组中筛选出所有大于 50 的元素。',
      starterCode: `import numpy as np

arr = np.array([30, 60, 40, 80, 50, 90, 20])
result = 
print(result)`,
      solution: `import numpy as np

arr = np.array([30, 60, 40, 80, 50, 90, 20])
result = arr[arr > 50]
print(result)`,
      hints: ['使用布尔索引', '条件是 arr > 50']
    },
    {
      id: 'quiz2-3',
      title: '测验题 3',
      instructions: '使用 reshape 将数组 [0,1,2,3,4,5] 变为 2x3 矩阵。',
      starterCode: `import numpy as np

arr = np.array([0, 1, 2, 3, 4, 5])
result = 
print(result)`,
      solution: `import numpy as np

arr = np.array([0, 1, 2, 3, 4, 5])
result = arr.reshape(2, 3)
print(result)`,
      hints: ['使用 reshape(2, 3)']
    }
  ]
};