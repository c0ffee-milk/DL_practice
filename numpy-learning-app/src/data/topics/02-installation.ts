import type { Topic } from '../../types';

export const topic02: Topic = {
  id: '02-installation',
  title: 'NumPy 安装',
  order: 2,
  category: 'basics',
  description: '学习如何在不同环境中安装 NumPy。',
  content: {
    explanation: `<p>使用 pip 安装 NumPy：</p>
<pre>pip install numpy</pre>
<p>使用国内镜像源安装（推荐）：</p>
<pre>pip install numpy -i https://pypi.tuna.tsinghua.edu.cn/simple</pre>
<p>如果使用 conda：</p>
<pre>conda install numpy</pre>
<p>安装验证：导入 NumPy 并执行简单操作，如果没有报错则说明安装成功。</p>`,
    keyPoints: [
      '使用 pip install numpy 安装',
      '可使用国内镜像加速下载',
      'conda 用户可用 conda install numpy',
      '通过导入测试验证安装'
    ]
  },
  examples: [
    {
      id: 'install-1',
      title: '创建单位矩阵验证安装',
      description: '使用 eye() 函数创建单位矩阵，验证 NumPy 是否正常工作',
      code: `import numpy as np

# 创建 4x4 单位矩阵
identity_matrix = np.eye(4)
print(identity_matrix)`,
      expectedOutput: `[[1. 0. 0. 0.]
 [0. 1. 0. 0.]
 [0. 0. 1. 0.]
 [0. 0. 0. 1.]]`
    }
  ],
  exercises: [
    {
      id: 'install-ex1',
      title: '创建简单数组',
      instructions: '创建一个包含数字 1 到 5 的 NumPy 数组并打印。',
      starterCode: `import numpy as np

# 创建一个包含 1,2,3,4,5 的数组
arr = 
print(arr)`,
      solution: `import numpy as np

arr = np.array([1, 2, 3, 4, 5])
print(arr)`,
      hints: ['使用 np.array() 函数创建数组', '将列表 [1,2,3,4,5] 作为参数传入']
    }
  ]
};