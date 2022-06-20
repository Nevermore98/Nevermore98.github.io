// 想隐藏手机端在首页时的侧边栏（目前只会这种笨方法）window.onload 不成功（window.onload 只能存在一个且执行一次）
setTimeout(() => {
  let toggleButton = document.querySelector('.toggle-sidebar-button')
  // 判断是否在首页
  if (
    window.location.href === 'http://localhost:8080/' ||
    window.location.href === 'http://monkee.online/' ||
    window.location.href === 'https://monkee.online/' ||
    window.location.href === 'https://nevermore98.github.io/' ||
    window.location.href === 'https://nevermore98.vercel.app/'
  ) {
    // toggleButton.style.setProperty('display', 'none', 'important')
    toggleButton.style.display = 'none'
  }
}, 50)
