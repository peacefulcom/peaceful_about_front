import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header class="flex items-center justify-between px-4 py-4 mx-auto">
          <div class="flex">
              <img class="h-8" src="./img/logo.png" alt="logo"/>
              <span class="text-2xl ml-2">PEACEFUL</span>
          </div>
          <div class="flex">
              <ul class="flex px-4 py-1">
                <li class="px-4"><Link href="/">Home</Link></li>
                <li class="px-4"><Link href="/about">About us</Link></li>
                <li class="px-4"><Link href="/business">Business</Link></li>
                <li class="px-4">Team</li>
                <li class="px-4">Value</li>
                <li class="px-4">Media</li>
              </ul>
              <button type="button" class="bg-red-500 px-4 py-1 rounded text-white">
                Join us
              </button>
          </div>

      </header>
      <main className={styles.main} class="">
        <div>
          <img src="./img/banner.png"/>
        </div>
        <div class="">
          <div class="flex items-center justify-between max-w-screen-2xl mx-auto mt-10">
            <div>
              <h3 class="text-2xl mb-10">愿景和价值</h3>
              <p>让所有爱好和平的人行动起来，让所有追求和平的人参与进来，共建和平体系。通过以“和平”为核心品牌，“以和为贵，和气生财”为基本理念，以“和融天下，共享财富”为目标愿景，用一双筷子和平征服世界，建一个平台融汇五湖四海，握一把钥匙打开共享财富之门。</p>
            </div>
            <div class="right-0 ml-20">
              <img src="./img/banner.png"/>
            </div>
          </div>
        </div>
        <div class="max-w-screen-2xl mx-auto mt-10">
          <hr class="border-gray-300"/>
        </div>
        <div class="">
          <div class="max-w-screen-2xl mx-auto mt-10">
            <div>
              <h3 class="text-2xl mb-10 mt-10">发展历程</h3>
            </div>
            <div>
              <img src="./img/banner.png"/>
            </div>
          </div>
        </div>
        <div class="max-w-screen-2xl mx-auto mt-10">
          <hr class="border-gray-300"/>
        </div>
        <div class="">
          <div class="max-w-screen-2xl mx-auto mt-10">
            <div>
              <h3 class="text-2xl mb-10 mt-10">业务架构</h3>
            </div>
            <div>
              <img src="./img/banner.png"/>
            </div>
          </div>
        </div>
        <div class="max-w-screen-2xl mx-auto mt-10">
          <hr class="border-gray-300"/>
        </div>
        <div class="">
          <div class="max-w-screen-2xl mx-auto mt-10">
            <div>
              <h3 class="text-2xl mb-10 mt-10">团队管理</h3>
            </div>
            <div>
              <img src="./img/banner.png"/>
            </div>
          </div>
        </div>
        <div class="max-w-screen-2xl mx-auto mt-10">
          <hr class="border-gray-300"/>
        </div>
        <div class="">
          <div class="max-w-screen-2xl mx-auto mt-10">
            <div>
              <h3 class="text-2xl mb-10 mt-10">企业文化</h3>
            </div>
            <div>
              <img src="./img/banner.png"/>
            </div>
          </div>
        </div>
        <div class="max-w-screen-2xl mx-auto mt-10">
          <hr class="border-gray-300"/>
        </div>
        <div class="">
          <div class="max-w-screen-2xl mx-auto mt-10">
            <div>
              <h3 class="text-2xl mb-10 mt-10">八大板块</h3>
            </div>
            <div>
              <img src="./img/banner.png"/>
            </div>
          </div>
          <div class="max-w-screen-2xl mx-auto mt-10">
          <hr class="border-gray-300"/>
        </div>
        <div class="">
          <div class="flex max-w-screen-2xl mx-auto mt-10">
            <div class="w-1/2 text-center">
              <h3 class="text-2xl mb-10">办公地点</h3>
              <p>1200 W 73rd Ave, Vancouver, BC V6P 6G5</p>
              <p>Working days: Mon-Fri 9:00am - 6:00pm</p>
              <p>Contact number 778-123-4567</p>
              <p>Contact email it@peacefulmall.com</p>
            </div>
            <div class="w-1/2">
              <img src="./img/banner.png"/>
            </div>
          </div>
        </div>
        </div>
        
      </main>

      <footer className={styles.footer} class="mt-10 bg-gray-100">
        <div class="max-w-screen-2xl mx-auto">
          <div class="flex w-4/6 mx-auto pt-10 text-gray-400">
              <ul class="m-10 leading-8">
                <li class="text-gray-600">About us</li>
                <li>公司介绍</li>
              </ul>
              <ul class="m-10 leading-8">
                <li class="text-gray-600">Business</li>
                <li>面向用户</li>
                <li>面向企业</li>
                <li>创新科技</li>
                <li>社交</li>
                <li>八大板块</li>
                <li>合作伙伴</li>
              </ul>
              <ul class="m-10 leading-8">
                <li class="text-gray-600">Team</li>
                <li>人才发展</li>
                <li>人才培训</li>
                <li>工作环境</li>
                <li>员工活动</li>
              </ul>
              <ul class="m-10 leading-8">
                <li class="text-gray-600">Value</li>
                <li>环境</li>
                <li>社会</li>
                <li>治理</li>
              </ul>
              <ul class="m-10 leading-8">
                <li class="text-gray-600">Media</li>
                <li>企业动态</li>
                <li>财务新闻</li>
                <li>和平视角</li>
                <li>媒体资料库</li>
                <li>联系我们</li>
              </ul>
              <ul class="m-10 leading-8">
                <li class="text-gray-600">Join us</li>
                <li>社会招聘</li>
                <li>校园招聘</li>
                <li>国际招聘</li>
                <li>和平生活</li>
              </ul>
          </div>
        </div>
        <div class="max-w-screen-2xl mx-auto">
          <hr class="border-gray-300"/>
        </div>
        <div class="flex items-center justify-between px-4 py-4 max-w-screen-2xl mx-auto text-gray-400">
          <div >Copyright© 2019 - 2022 Peacefulmedia Ltd. All Right Reserved</div>
          <div class="right-0">Privacy Policy | Terms of Service | FAQ | English • CAD</div>
        </div>
      </footer>
    </div>
  )
}
