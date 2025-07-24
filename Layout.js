<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2575.6">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 14.0px Menlo; -webkit-text-stroke: #000000; min-height: 16.0px}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 14.0px Menlo; -webkit-text-stroke: #000000}
    p.p3 {margin: 0.0px 0.0px 0.0px 0.0px; font: 14.0px Menlo; color: #900112; -webkit-text-stroke: #900112}
    p.p4 {margin: 0.0px 0.0px 0.0px 0.0px; font: 14.0px Menlo; color: #0000ff; -webkit-text-stroke: #0000ff}
    p.p5 {margin: 0.0px 0.0px 0.0px 0.0px; font: 14.0px Menlo; color: #0e6e6d; -webkit-text-stroke: #0e6e6d}
    p.p6 {margin: 0.0px 0.0px 0.0px 0.0px; font: 14.0px Menlo; color: #0f7001; -webkit-text-stroke: #0f7001}
    span.s1 {font-kerning: none}
    span.s2 {font-kerning: none; color: #0000ff; background-color: #fffffe; -webkit-text-stroke: 0px #0000ff}
    span.s3 {font-kerning: none; background-color: #fffffe}
    span.s4 {font-kerning: none; color: #0e6e6d; background-color: #fffffe; -webkit-text-stroke: 0px #0e6e6d}
    span.s5 {font-kerning: none; color: #900112; background-color: #fffffe; -webkit-text-stroke: 0px #900112}
    span.s6 {font-kerning: none; color: #000000; background-color: #fffffe; -webkit-text-stroke: 0px #000000}
    span.s7 {font-kerning: none; color: #137646; background-color: #fffffe; -webkit-text-stroke: 0px #137646}
    span.s8 {font-kerning: none; color: #bf1c25; background-color: #fffffe; -webkit-text-stroke: 0px #bf1c25}
  </style>
</head>
<body>
<p class="p1"><span class="s1"></span><br></p>
<p class="p2"><span class="s2">import</span><span class="s3"> </span><span class="s4">React</span><span class="s3">, { useState, useEffect } </span><span class="s2">from</span><span class="s3"> </span><span class="s5">"react"</span><span class="s3">;</span></p>
<p class="p2"><span class="s2">import</span><span class="s3"> { </span><span class="s4">Link</span><span class="s3">, useNavigate } </span><span class="s2">from</span><span class="s3"> </span><span class="s5">"react-router-dom"</span><span class="s3">;</span></p>
<p class="p2"><span class="s2">import</span><span class="s3"> { createPageUrl } </span><span class="s2">from</span><span class="s3"> </span><span class="s5">"@/utils"</span><span class="s3">;</span></p>
<p class="p3"><span class="s2">import</span><span class="s6"> { </span><span class="s4">User</span><span class="s6"> } </span><span class="s2">from</span><span class="s6"> </span><span class="s3">"@/entities/User"</span><span class="s6">;</span></p>
<p class="p4"><span class="s3">import</span><span class="s6"> {</span></p>
<p class="p5"><span class="s6"><span class="Apple-converted-space">  </span></span><span class="s3">DropdownMenu</span><span class="s6">,</span></p>
<p class="p5"><span class="s6"><span class="Apple-converted-space">  </span></span><span class="s3">DropdownMenuContent</span><span class="s6">,</span></p>
<p class="p5"><span class="s6"><span class="Apple-converted-space">  </span></span><span class="s3">DropdownMenuItem</span><span class="s6">,</span></p>
<p class="p5"><span class="s6"><span class="Apple-converted-space">  </span></span><span class="s3">DropdownMenuLabel</span><span class="s6">,</span></p>
<p class="p5"><span class="s6"><span class="Apple-converted-space">  </span></span><span class="s3">DropdownMenuSeparator</span><span class="s6">,</span></p>
<p class="p5"><span class="s6"><span class="Apple-converted-space">  </span></span><span class="s3">DropdownMenuTrigger</span><span class="s6">,</span></p>
<p class="p3"><span class="s6">} </span><span class="s2">from</span><span class="s6"> </span><span class="s3">"@/components/ui/dropdown-menu"</span><span class="s6">;</span></p>
<p class="p5"><span class="s2">import</span><span class="s6"> { </span><span class="s3">Home</span><span class="s6">, </span><span class="s3">BookOpen</span><span class="s6">, </span><span class="s3">History</span><span class="s6">, </span><span class="s3">User</span><span class="s6"> as </span><span class="s3">UserIcon</span><span class="s6">, </span><span class="s3">LogOut</span><span class="s6">, </span><span class="s3">Menu</span><span class="s6">, </span><span class="s3">X</span><span class="s6">, </span><span class="s3">Star</span><span class="s6">, </span><span class="s3">ChefHat</span><span class="s6"> } </span><span class="s2">from</span><span class="s6"> </span><span class="s5">"lucide-react"</span><span class="s6">;</span></p>
<p class="p3"><span class="s2">import</span><span class="s6"> { </span><span class="s4">Button</span><span class="s6"> } </span><span class="s2">from</span><span class="s6"> </span><span class="s3">"@/components/ui/button"</span><span class="s6">;</span></p>
<p class="p3"><span class="s2">import</span><span class="s6"> { </span><span class="s4">Skeleton</span><span class="s6"> } </span><span class="s2">from</span><span class="s6"> </span><span class="s3">"@/components/ui/skeleton"</span><span class="s6">;</span></p>
<p class="p1"><span class="s1"></span><br></p>
<p class="p2"><span class="s2">export</span><span class="s3"> </span><span class="s2">default</span><span class="s3"> </span><span class="s2">function</span><span class="s3"> </span><span class="s4">Layout</span><span class="s3">({ children, currentPageName }) {</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">  </span></span><span class="s2">const</span><span class="s3"> [user, setUser] = useState(</span><span class="s2">null</span><span class="s3">);</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">  </span></span><span class="s2">const</span><span class="s3"> [loading, setLoading] = useState(</span><span class="s2">true</span><span class="s3">);</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">  </span></span><span class="s2">const</span><span class="s3"> [isMenuOpen, setIsMenuOpen] = useState(</span><span class="s2">false</span><span class="s3">);</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">  </span></span><span class="s2">const</span><span class="s3"> navigate = useNavigate();</span></p>
<p class="p1"><span class="s1"></span><br></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">  </span>useEffect(() =&gt; {</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">    </span></span><span class="s2">async</span><span class="s3"> </span><span class="s2">function</span><span class="s3"> fetchUser() {</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">      </span></span><span class="s2">try</span><span class="s3"> {</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">        </span></span><span class="s2">const</span><span class="s3"> userData = </span><span class="s2">await</span><span class="s3"> </span><span class="s4">User</span><span class="s3">.me();</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">        </span>setUser(userData);</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">      </span>} </span><span class="s2">catch</span><span class="s3"> (error) {</span></p>
<p class="p6"><span class="s6"><span class="Apple-converted-space">        </span></span><span class="s3">// Silently fail if user is not logged in</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">      </span>} </span><span class="s2">finally</span><span class="s3"> {</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">        </span>setLoading(</span><span class="s2">false</span><span class="s3">);</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">      </span>}</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">    </span>fetchUser();</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">  </span>}, []);</span></p>
<p class="p1"><span class="s1"></span><br></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">  </span></span><span class="s2">const</span><span class="s3"> handleLogout = </span><span class="s2">async</span><span class="s3"> () =&gt; {</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">    </span></span><span class="s2">await</span><span class="s3"> </span><span class="s4">User</span><span class="s3">.logout();</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">    </span>navigate(createPageUrl(</span><span class="s5">"Home"</span><span class="s3">));</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">  </span>};</span></p>
<p class="p1"><span class="s1"></span><br></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">  </span></span><span class="s2">const</span><span class="s3"> toggleMenu = () =&gt; setIsMenuOpen(!isMenuOpen);</span></p>
<p class="p1"><span class="s1"></span><br></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">  </span></span><span class="s2">const</span><span class="s3"> navLinks = [</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">    </span>{ name: </span><span class="s5">"Início"</span><span class="s3">, href: </span><span class="s5">"Home"</span><span class="s3">, icon: </span><span class="s4">Home</span><span class="s3"> },</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">    </span>{ name: </span><span class="s5">"Receitas"</span><span class="s3">, href: </span><span class="s5">"Recipes"</span><span class="s3">, icon: </span><span class="s4">BookOpen</span><span class="s3"> },</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">    </span>{ name: </span><span class="s5">"Histórico"</span><span class="s3">, href: </span><span class="s5">"History"</span><span class="s3">, icon: </span><span class="s4">History</span><span class="s3"> },</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">  </span>];</span></p>
<p class="p1"><span class="s1"></span><br></p>
<p class="p4"><span class="s6"><span class="Apple-converted-space">  </span></span><span class="s3">return</span><span class="s6"> (</span></p>
<p class="p3"><span class="s6"><span class="Apple-converted-space">    </span>&lt;div className=</span><span class="s3">"min-h-screen bg-gradient-to-b from-amber-50 to-white flex flex-col"</span><span class="s6">&gt;</span></p>
<p class="p6"><span class="s6"><span class="Apple-converted-space">      </span>{</span><span class="s3">/* Styles (unchanged) */</span><span class="s6">}</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">      </span>&lt;style&gt;{</span><span class="s5">`</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">        </span>:root {</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">          </span>--primary: #ff7b54;</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">          </span>--primary-light: #ffb26b;</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">          </span>--primary-dark: #e45826;</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">          </span>--accent: #4e9f3d;</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">          </span>--text-dark: #2c3333;</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">          </span>--text-light: #f9f9f9;</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">          </span>--bg-light: #fefefe;</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">          </span>--bg-secondary: #f8f9fa;</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">        </span>body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; color: var(--text-dark); }</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">        </span>.nav-link { transition: all 0.2s ease; position: relative; color: #4a5568; }</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">        </span>.nav-link:hover { color: var(--primary); }</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">        </span>.nav-link.active { color: var(--primary-dark); font-weight: 600; }</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">        </span>.nav-link.active::after { content: ''; position: absolute; bottom: -6px; left: 0; right: 0; margin: auto; width: 80%; height: 2px; background-color: var(--primary); border-radius: 2px; }</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">        </span>.card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">        </span>.card-hover:hover { transform: translateY(-4px); box-shadow: 0 12px 20px -10px rgba(255, 123, 84, 0.3); }</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">        </span>@keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">        </span>.animate-slide-in { animation: slideIn 0.3s ease forwards; }</span></p>
<p class="p2"><span class="s5"><span class="Apple-converted-space">      </span>`</span><span class="s3">}&lt;/style&gt;</span></p>
<p class="p1"><span class="s3"><span class="Apple-converted-space">      </span></span></p>
<p class="p6"><span class="s6"><span class="Apple-converted-space">      </span>{</span><span class="s3">/* Desktop Header */</span><span class="s6">}</span></p>
<p class="p3"><span class="s6"><span class="Apple-converted-space">      </span>&lt;header className=</span><span class="s3">"hidden md:flex w-full bg-white/80 backdrop-blur-sm shadow-sm px-6 py-3 items-center justify-between sticky top-0 z-20"</span><span class="s6">&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">        </span>&lt;</span><span class="s4">Link</span><span class="s3"> to={createPageUrl(</span><span class="s5">"Home"</span><span class="s3">)} className=</span><span class="s5">"flex items-center gap-2"</span><span class="s3">&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">           </span>&lt;</span><span class="s4">ChefHat</span><span class="s3"> className=</span><span class="s5">"text-[#ff7b54]"</span><span class="s3"> size={</span><span class="s7">28</span><span class="s3">}/&gt;</span></p>
<p class="p3"><span class="s6"><span class="Apple-converted-space">          </span>&lt;span className=</span><span class="s3">"text-2xl font-bold text-[#ff7b54]"</span><span class="s6">&gt;</span><span class="s4">Rest</span><span class="s8">ô</span><span class="s4">AI</span><span class="s6">&lt;/span&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">        </span>&lt;/</span><span class="s4">Link</span><span class="s3">&gt;</span></p>
<p class="p3"><span class="s6"><span class="Apple-converted-space">        </span>&lt;nav className=</span><span class="s3">"flex items-center gap-8"</span><span class="s6">&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">          </span>{navLinks.map(link =&gt; (</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">            </span>&lt;</span><span class="s4">Link</span><span class="s3"><span class="Apple-converted-space"> </span></span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">              </span>key={link.name}<span class="Apple-converted-space"> </span></span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">              </span>to={createPageUrl(link.href)}</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">              </span>className={</span><span class="s5">`nav-link text-md </span><span class="s3">${currentPageName === link.href ? </span><span class="s5">'active'</span><span class="s3"> : </span><span class="s5">''</span><span class="s3">}</span><span class="s5">`</span><span class="s3">}</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">            </span>&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">              </span>{link.name}</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">            </span>&lt;/</span><span class="s4">Link</span><span class="s3">&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">          </span>))}</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">        </span>&lt;/nav&gt;</span></p>
<p class="p3"><span class="s6"><span class="Apple-converted-space">        </span>&lt;div className=</span><span class="s3">"flex items-center gap-4"</span><span class="s6">&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">          </span>{loading ? (</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">            </span>&lt;</span><span class="s4">Skeleton</span><span class="s3"> className=</span><span class="s5">"h-10 w-24"</span><span class="s3"> /&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">          </span>) : user &amp;&amp; user.plan !== </span><span class="s5">'premium'</span><span class="s3"> ? (</span></p>
<p class="p3"><span class="s6"><span class="Apple-converted-space">            </span>&lt;</span><span class="s4">Button</span><span class="s6"> asChild className=</span><span class="s3">"bg-yellow-400 text-yellow-900 hover:bg-yellow-500"</span><span class="s6">&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">              </span>&lt;</span><span class="s4">Link</span><span class="s3"> to={createPageUrl(</span><span class="s5">"Upgrade"</span><span class="s3">)}&gt;&lt;</span><span class="s4">Star</span><span class="s3"> size={</span><span class="s7">16</span><span class="s3">} className=</span><span class="s5">"mr-2"</span><span class="s3">/&gt;</span><span class="s4">Premium</span><span class="s3">&lt;/</span><span class="s4">Link</span><span class="s3">&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">            </span>&lt;/</span><span class="s4">Button</span><span class="s3">&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">          </span>) : </span><span class="s2">null</span><span class="s3">}</span></p>
<p class="p1"><span class="s1"></span><br></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">          </span>{loading ? (</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">            </span>&lt;</span><span class="s4">Skeleton</span><span class="s3"> className=</span><span class="s5">"h-10 w-10 rounded-full"</span><span class="s3"> /&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">          </span>) : user ? (</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">            </span>&lt;</span><span class="s4">DropdownMenu</span><span class="s3">&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">              </span>&lt;</span><span class="s4">DropdownMenuTrigger</span><span class="s3"> asChild&gt;</span></p>
<p class="p3"><span class="s6"><span class="Apple-converted-space">                </span>&lt;</span><span class="s4">Button</span><span class="s6"> variant=</span><span class="s3">"ghost"</span><span class="s6"> className=</span><span class="s3">"relative h-10 w-10 rounded-full"</span><span class="s6">&gt;</span></p>
<p class="p3"><span class="s6"><span class="Apple-converted-space">                   </span>&lt;div className=</span><span class="s3">"bg-orange-400 text-white m-0 px-4 text-lg font-bold w-10 h-10 rounded-full from-[#ff7b54] to-[#ffb26b] flex items-center justify-center"</span><span class="s6">&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">                    </span>{user.full_name ? user.full_name.charAt(</span><span class="s7">0</span><span class="s3">).toUpperCase() : </span><span class="s5">"U"</span><span class="s3">}</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">                  </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">                </span>&lt;/</span><span class="s4">Button</span><span class="s3">&gt;</span></p>
<p class="p5"><span class="s6"><span class="Apple-converted-space">              </span>&lt;/</span><span class="s3">DropdownMenuTrigger</span><span class="s6">&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">              </span>&lt;</span><span class="s4">DropdownMenuContent</span><span class="s3"> className=</span><span class="s5">"w-56"</span><span class="s3"> align=</span><span class="s5">"end"</span><span class="s3"> forceMount&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">                </span>&lt;</span><span class="s4">DropdownMenuLabel</span><span class="s3">&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">                  </span>&lt;div className=</span><span class="s5">"flex flex-col space-y-1"</span><span class="s3">&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">                    </span>&lt;p className=</span><span class="s5">"text-sm font-medium leading-none"</span><span class="s3">&gt;{user.full_name}&lt;/p&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">                    </span>&lt;p className=</span><span class="s5">"text-xs leading-none text-muted-foreground"</span><span class="s3">&gt;{user.email}&lt;/p&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">                  </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">                </span>&lt;/</span><span class="s4">DropdownMenuLabel</span><span class="s3">&gt;</span></p>
<p class="p5"><span class="s6"><span class="Apple-converted-space">                </span>&lt;</span><span class="s3">DropdownMenuSeparator</span><span class="s6"> /&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">                </span>&lt;</span><span class="s4">DropdownMenuItem</span><span class="s3"> asChild&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">                  </span>&lt;</span><span class="s4">Link</span><span class="s3"> to={createPageUrl(</span><span class="s5">"Profile"</span><span class="s3">)}&gt;&lt;</span><span class="s4">UserIcon</span><span class="s3"> className=</span><span class="s5">"mr-2 h-4 w-4"</span><span class="s3"> /&gt;&lt;span&gt;</span><span class="s4">Perfil</span><span class="s3">&lt;/span&gt;&lt;/</span><span class="s4">Link</span><span class="s3">&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">                </span>&lt;/</span><span class="s4">DropdownMenuItem</span><span class="s3">&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">                </span>&lt;</span><span class="s4">DropdownMenuItem</span><span class="s3"> onClick={handleLogout}&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">                  </span>&lt;</span><span class="s4">LogOut</span><span class="s3"> className=</span><span class="s5">"mr-2 h-4 w-4"</span><span class="s3"> /&gt;&lt;span&gt;</span><span class="s4">Sair</span><span class="s3">&lt;/span&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">                </span>&lt;/</span><span class="s4">DropdownMenuItem</span><span class="s3">&gt;</span></p>
<p class="p5"><span class="s6"><span class="Apple-converted-space">              </span>&lt;/</span><span class="s3">DropdownMenuContent</span><span class="s6">&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">            </span>&lt;/</span><span class="s4">DropdownMenu</span><span class="s3">&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">          </span>) : (</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">             </span>&lt;</span><span class="s4">Button</span><span class="s3"> asChild&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">              </span>&lt;</span><span class="s4">Link</span><span class="s3"> to={createPageUrl(</span><span class="s5">"Login"</span><span class="s3">)}&gt;</span><span class="s4">Entrar</span><span class="s3">&lt;/</span><span class="s4">Link</span><span class="s3">&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">            </span>&lt;/</span><span class="s4">Button</span><span class="s3">&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">          </span>)}</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">        </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">      </span>&lt;/header&gt;</span></p>
<p class="p1"><span class="s1"></span><br></p>
<p class="p6"><span class="s6"><span class="Apple-converted-space">      </span>{</span><span class="s3">/* Mobile Header &amp; Menu (no changes) */</span><span class="s6">}</span></p>
<p class="p3"><span class="s6"><span class="Apple-converted-space">      </span>&lt;header className=</span><span class="s3">"w-full bg-white shadow-sm px-4 py-3 flex items-center justify-between md:hidden z-20"</span><span class="s6">&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">        </span>&lt;</span><span class="s4">Link</span><span class="s3"> to={createPageUrl(</span><span class="s5">"Home"</span><span class="s3">)} className=</span><span class="s5">"flex items-center gap-2"</span><span class="s3">&gt;</span></p>
<p class="p3"><span class="s6"><span class="Apple-converted-space">          </span>&lt;div className=</span><span class="s3">"text-2xl font-bold text-[#ff7b54]"</span><span class="s6">&gt;</span><span class="s4">Rest</span><span class="s8">ô</span><span class="s4">AI</span><span class="s6">&lt;/div&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">        </span>&lt;/</span><span class="s4">Link</span><span class="s3">&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">        </span>&lt;</span><span class="s4">Button</span><span class="s3"> variant=</span><span class="s5">"ghost"</span><span class="s3"> size=</span><span class="s5">"icon"</span><span class="s3"> onClick={toggleMenu}&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">          </span>{isMenuOpen ? &lt;</span><span class="s4">X</span><span class="s3"> size={</span><span class="s7">24</span><span class="s3">} /&gt; : &lt;</span><span class="s4">Menu</span><span class="s3"> size={</span><span class="s7">24</span><span class="s3">} /&gt;}</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">        </span>&lt;/</span><span class="s4">Button</span><span class="s3">&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">      </span>&lt;/header&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">      </span>{isMenuOpen &amp;&amp; (</span></p>
<p class="p3"><span class="s6"><span class="Apple-converted-space">        </span>&lt;div className=</span><span class="s3">"fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"</span><span class="s6"> onClick={toggleMenu}&gt;</span></p>
<p class="p3"><span class="s6"><span class="Apple-converted-space">          </span>&lt;div className=</span><span class="s3">"absolute right-0 top-0 h-full w-64 bg-white shadow-lg p-5 animate-slide-in"</span><span class="s6"> onClick={e =&gt; e.stopPropagation()}&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">            </span>&lt;div className=</span><span class="s5">"flex flex-col gap-6 mt-8"</span><span class="s3">&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">              </span>{navLinks.map(link =&gt; (</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">                </span>&lt;</span><span class="s4">Link</span><span class="s3"> key={link.name} to={createPageUrl(link.href)} className={</span><span class="s5">`flex items-center gap-3 text-lg </span><span class="s3">${currentPageName === link.href ? </span><span class="s5">"text-[#ff7b54] font-medium"</span><span class="s3"> : </span><span class="s5">""</span><span class="s3">}</span><span class="s5">`</span><span class="s3">} onClick={toggleMenu}&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">                  </span>&lt;link.icon size={</span><span class="s7">20</span><span class="s3">} /&gt; {link.name}</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">                </span>&lt;/</span><span class="s4">Link</span><span class="s3">&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">              </span>))}</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">              </span>&lt;</span><span class="s4">Link</span><span class="s3"> to={createPageUrl(</span><span class="s5">"Upgrade"</span><span class="s3">)} className={</span><span class="s5">`flex items-center gap-3 text-lg </span><span class="s3">${currentPageName === </span><span class="s5">"Upgrade"</span><span class="s3"> ? </span><span class="s5">"text-[#ff7b54] font-medium"</span><span class="s3"> : </span><span class="s5">"text-amber-600"</span><span class="s3">}</span><span class="s5">`</span><span class="s3">} onClick={toggleMenu}&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">                </span>&lt;</span><span class="s4">Star</span><span class="s3"> size={</span><span class="s7">20</span><span class="s3">} /&gt; </span><span class="s4">Premium</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">              </span>&lt;/</span><span class="s4">Link</span><span class="s3">&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">              </span>&lt;</span><span class="s4">Link</span><span class="s3"> to={createPageUrl(</span><span class="s5">"Profile"</span><span class="s3">)} className={</span><span class="s5">`flex items-center gap-3 text-lg </span><span class="s3">${currentPageName === </span><span class="s5">"Profile"</span><span class="s3"> ? </span><span class="s5">"text-[#ff7b54] font-medium"</span><span class="s3"> : </span><span class="s5">""</span><span class="s3">}</span><span class="s5">`</span><span class="s3">} onClick={toggleMenu}&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">                </span>&lt;</span><span class="s4">UserIcon</span><span class="s3"> size={</span><span class="s7">20</span><span class="s3">} /&gt; </span><span class="s4">Perfil</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">              </span>&lt;/</span><span class="s4">Link</span><span class="s3">&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">              </span>&lt;</span><span class="s4">Button</span><span class="s3"> variant=</span><span class="s5">"ghost"</span><span class="s3"> className=</span><span class="s5">"flex justify-start gap-3 text-lg text-red-500"</span><span class="s3"> onClick={handleLogout}&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">                </span>&lt;</span><span class="s4">LogOut</span><span class="s3"> size={</span><span class="s7">20</span><span class="s3">} /&gt; </span><span class="s4">Sair</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">              </span>&lt;/</span><span class="s4">Button</span><span class="s3">&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">            </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">          </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">        </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">      </span>)}</span></p>
<p class="p1"><span class="s1"></span><br></p>
<p class="p6"><span class="s6"><span class="Apple-converted-space">      </span>{</span><span class="s3">/* Main Content */</span><span class="s6">}</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">      </span>&lt;main className=</span><span class="s5">"flex-1"</span><span class="s3">&gt;{children}&lt;/main&gt;</span></p>
<p class="p1"><span class="s1"></span><br></p>
<p class="p6"><span class="s6"><span class="Apple-converted-space">      </span>{</span><span class="s3">/* Mobile Bottom Navigation (no changes) */</span><span class="s6">}</span></p>
<p class="p3"><span class="s6"><span class="Apple-converted-space">      </span>&lt;div className=</span><span class="s3">"md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.05)] rounded-t-xl px-2 py-3 z-10"</span><span class="s6">&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">        </span>&lt;div className=</span><span class="s5">"flex justify-around"</span><span class="s3">&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">          </span>{navLinks.map(link =&gt; (</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">            </span>&lt;</span><span class="s4">Link</span><span class="s3"> key={link.name} to={createPageUrl(link.href)} className={</span><span class="s5">`flex flex-col items-center justify-center gap-1 w-16 </span><span class="s3">${currentPageName === link.href ? </span><span class="s5">"text-[#ff7b54]"</span><span class="s3"> : </span><span class="s5">"text-gray-500"</span><span class="s3">}</span><span class="s5">`</span><span class="s3">}&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">              </span>&lt;link.icon size={</span><span class="s7">20</span><span class="s3">} /&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">              </span>&lt;span className=</span><span class="s5">"text-xs"</span><span class="s3">&gt;{link.name}&lt;/span&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">            </span>&lt;/</span><span class="s4">Link</span><span class="s3">&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">          </span>))}</span></p>
<p class="p3"><span class="s6"><span class="Apple-converted-space">          </span>&lt;</span><span class="s4">Link</span><span class="s6"> to={createPageUrl(</span><span class="s3">"Profile"</span><span class="s6">)} className={</span><span class="s3">`flex flex-col items-center justify-center gap-1 w-16 </span><span class="s6">${currentPageName === </span><span class="s3">"Profile"</span><span class="s6"> ? </span><span class="s3">"text-[#ff7b54]"</span><span class="s6"> : </span><span class="s3">"text-gray-500"</span><span class="s6">}</span><span class="s3">`</span><span class="s6">}&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">            </span>&lt;</span><span class="s4">UserIcon</span><span class="s3"> size={</span><span class="s7">20</span><span class="s3">} /&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">            </span>&lt;span className=</span><span class="s5">"text-xs"</span><span class="s3">&gt;</span><span class="s4">Perfil</span><span class="s3">&lt;/span&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">          </span>&lt;/</span><span class="s4">Link</span><span class="s3">&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">        </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">      </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">    </span>&lt;/div&gt;</span></p>
<p class="p2"><span class="s3"><span class="Apple-converted-space">  </span>);</span></p>
<p class="p2"><span class="s3">}</span></p>
<p class="p1"><span class="s1"></span><br></p>
</body>
</html>
