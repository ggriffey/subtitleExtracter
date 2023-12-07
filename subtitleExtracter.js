//takes in o?- file and removes all html tags, only
// leaving inner text with new lines in between

const text = `<div>
<p xml:id="subtitle1" begin="1045627917t" end="1063562500t" region="region0">
<span style="style1">UNA SERIE ORIGINAL DE NETFLIX</span>
</p>
<p xml:id="subtitle2" begin="1340922917t" end="1385550834t" region="region0">
<span style="style1">CAPÍTULO 5: LA ROCA TROL</span>
</p>
<p xml:id="subtitle3" begin="1400565834t" end="1420585834t" region="region1">
<span style="style1">BIENVENIDOS, PADRES</span>
</p>
<p xml:id="subtitle4" begin="1509841667t" end="1521937084t" region="region0">
<span style="style1">¡Hola!</span>
</p>
<p xml:id="subtitle5" begin="1543208334t" end="1579911667t" region="region0">
<span style="style1">Bienvenidos. Soy el director Magnusson.</span>
</p>
<p xml:id="subtitle6" begin="1600765834t" end="1634966667t" region="region0">
<span style="style1">- Gracias.</span>
<br/>
<span style="style1">- Gracias a ustedes por venir.</span>
</p>
<p xml:id="subtitle7" begin="1635800834t" end="1660825834t" region="region0">
<span style="style1">Quédense hasta el gran final.</span>
</p>
<p xml:id="subtitle8" begin="1768433334t" end="1804719584t" region="region0">
<span style="style1">Haremos una ceremonia</span>
<br/>
<span style="style1">para la nueva estatua.</span>
</p>
<p xml:id="subtitle9" begin="1828076250t" end="1839337500t" region="region0">
<span style="style1">Parece bueno.</span>
</p>
<p xml:id="subtitle10" begin="1842257084t" end="1869367500t" region="region0">
<span style="style1">¡Lo es!</span>
</p>
<p xml:id="subtitle11" begin="1873955417t" end="1929010417t" region="region0">
<span style="style1">Uno de los fundadores de la ciudad.</span>
<br/>
<span style="style1">Edmund "Cazatrols" Ahlberg.</span>
</p>
<p xml:id="subtitle12" begin="1938603334t" end="1970301667t" region="region0">
<span style="style1">¡Me encanta inaugurar muestras de arte!</span>
</p>
<p xml:id="subtitle13" begin="1971135834t" end="2031612917t" region="region0">
<span style="style1">No quiero adelantarles nada,</span>
<br/>
<span style="style1">pero quizá lea un poema.</span>
</p>
<p xml:id="subtitle14" begin="2042874167t" end="2052050000t" region="region0">
<span style="style1">Encantador.</span>
</p>
<p xml:id="subtitle15" begin="2107105000t" end="2132547084t" region="region0">
<span style="style1">Esta es mi muestra: piojos.</span>
</p>
<p xml:id="subtitle16" begin="2133381250t" end="2157989167t" region="region0">
<span style="style1">Yo misma te los quité del cabello.</span>
</p>
<p xml:id="subtitle17" begin="2158823334t" end="2167165000t" region="region0">
<span style="style1">Es cierto.</span>
</p>
<p xml:id="subtitle18" begin="2174672500t" end="2199697500t" region="region0">
<span style="style1">Pensé que no volvería a verlos.</span>
</p>
<p xml:id="subtitle19" begin="2200531667t" end="2257255000t" region="region0">
<span style="style1">Aquí nadie había visto piojos. Además,</span>
<br/>
<span style="style1">no podía usar rocas. Es el tema de David.</span>
</p>
<p xml:id="subtitle20" begin="2258089167t" end="2288953334t" region="region0">
<span style="style1">Excelente, hijo.</span>
<br/>
<span style="style1">Llenaste muy bien la caja.</span>
</p>
<p xml:id="subtitle21" begin="2289787500t" end="2332747084t" region="region0">
<span style="style1">Cariño, es el mejor trabajo</span>
<br/>
<span style="style1">que hayas hecho.</span>
</p>
<p xml:id="subtitle22" begin="2339837500t" end="2348179167t" region="region0">
<span style="style1">¡Hola!</span>
</p>
<p xml:id="subtitle23" begin="2359023334t" end="2378626250t" region="region0">
<span style="style1">Estoy orgullosa de ti.</span>
</p>
<p xml:id="subtitle24" begin="2379460417t" end="2426173750t" region="region0">
<span style="style1">Estabas nerviosa por la escuela,</span>
<br/>
<span style="style1">pero te adaptaste muy bien.</span>
</p>
<p xml:id="subtitle25" begin="2431595834t" end="2439937500t" region="region0">
<span style="style1">Gracias.</span>
</p>
<p xml:id="subtitle26" begin="2442857084t" end="2467465000t" region="region0">
<span style="style1">Frida y David me ayudaron mucho.</span>
</p>
<p xml:id="subtitle27" begin="2468299167t" end="2484982500t" region="region0">
<span style="style1">Hilda, ¡aquí estás!</span>
</p>
<p xml:id="subtitle28" begin="2487485000t" end="2517097917t" region="region0">
<span style="style1">Tardaste y creí que no vendrías.</span>
</p>
<p xml:id="subtitle29" begin="2517932084t" end="2530861667t" region="region0">
<span style="style1">Mira mi proyecto.</span>
</p>
<p xml:id="subtitle30" begin="2537535000t" end="2555886667t" region="region0">
<span style="style1">Crecen muy rápido, ¿no?</span>
</p>
<p xml:id="subtitle31" begin="2561725834t" end="2570067500t" region="region0">
<span style="style1">¿Alfur?</span>
</p>
<p xml:id="subtitle32" begin="2573404167t" end="2581745834t" region="region0">
<span style="style1">Tranquila.</span>
</p>
<p xml:id="subtitle33" begin="2582580000t" end="2617197917t" region="region0">
<span style="style1">Te haré compañía cuando Hilda no esté.</span>
</p>
<p xml:id="subtitle34" begin="2619283334t" end="2647227917t" region="region0">
<span style="style1">Firmar los papeles valió la pena.</span>
</p>
<p xml:id="subtitle35" begin="2653901250t" end="2668499167t" region="region0">
<span style="style1">¿Qué haces aquí?</span>
</p>
<p xml:id="subtitle36" begin="2680594584t" end="2697695000t" region="region0">
<span style="style1">Un informe de la escuela.</span>
</p>
<p xml:id="subtitle37" begin="2701031667t" end="2726056667t" region="region0">
<span style="style1">Los elfos quieren saber de Hilda.</span>
</p>
<p xml:id="subtitle38" begin="2733981250t" end="2748162084t" region="region0">
<span style="style1">- ¿De veras?</span>
<br/>
<span style="style1">- Sí.</span>
</p>
<p xml:id="subtitle39" begin="2751081667t" end="2808222084t" region="region0">
<span style="style1">La vida de los elfos es aburrida</span>
<br/>
<span style="style1">ahora que ustedes no pisan las casas.</span>
</p>
<p xml:id="subtitle40" begin="2811558750t" end="2833247084t" region="region0">
<span style="style1">No es buena idea que estés aquí.</span>
</p>
<p xml:id="subtitle41" begin="2836583750t" end="2867865000t" region="region0">
<span style="style1">Nadie puede verme. Todo saldrá bien.</span>
</p>
<p xml:id="subtitle42" begin="2877457917t" end="2904985417t" region="region0">
<span style="style1">Bien. Mantén un perfil bajo.</span>
</p>
<p xml:id="subtitle43" begin="2908739167t" end="2926673750t" region="region0">
<span style="style1">No tengo otra opción.</span>
</p>
<p xml:id="subtitle44" begin="2985065417t" end="3023854167t" region="region0">
<span style="style1">Empezaremos con un video</span>
<br/>
<span style="style1">de la historia de la escuela.</span>
</p>
<p xml:id="subtitle45" begin="3028442084t" end="3036783750t" region="region0">
<span style="style1">¿Trevor?</span>
</p>
<p xml:id="subtitle46" begin="3041371667t" end="3052215834t" region="region0">
<span style="style1">Sí, señora.</span>
</p>
<p xml:id="subtitle47" begin="3136466667t" end="3161908750t" region="region0">
<span style="style1">EL CONSEJO DE EDUCACIÓN</span>
<br/>
<span style="style1">Y DOMESTICACIÓN PRESENTA:</span>
</p>
<p xml:id="subtitle48" begin="3162742917t" end="3179426250t" region="region0">
<span style="style2">300 AÑOS DE LA ESCUELA AHLBERG</span>
</p>
<p xml:id="subtitle49" begin="3207787917t" end="3243240000t" region="region0">
<span style="style2">Hace 300 años,</span>
<br/>
<span style="style2">Edmund Ahlberg fundó la escuela</span>
</p>
<p xml:id="subtitle50" begin="3244074167t" end="3297043750t" region="region0">
<span style="style2">con base en estructura y disciplina,</span>
<br/>
<span style="style2">tratando a los alumnos por igual.</span>
</p>
<p xml:id="subtitle51" begin="3308305000t" end="3327490834t" region="region0">
<span style="style2">Nos guía su visión...</span>
</p>
<p xml:id="subtitle52" begin="3380460417t" end="3395475417t" region="region0">
<span style="style1">¡Mi proyecto!</span>
</p>
<p xml:id="subtitle53" begin="3407153750t" end="3415495417t" region="region0">
<span style="style1">¿Qué pasó?</span>
</p>
<p xml:id="subtitle54" begin="3420500417t" end="3445108334t" region="region0">
<span style="style1">Alguien arrojó las rocas de David.</span>
</p>
<p xml:id="subtitle55" begin="3450947500t" end="3462625834t" region="region0">
<span style="style1">¿"Alguien"?</span>
</p>
<p xml:id="subtitle56" begin="3471801667t" end="3484314167t" region="region0">
<span style="style1">¿Qué insinúa?</span>
</p>
<p xml:id="subtitle57" begin="3506419584t" end="3520183334t" region="region0">
<span style="style1">¿Piensa que fui yo?</span>
</p>
<p xml:id="subtitle58" begin="3522268750t" end="3552298750t" region="region0">
<span style="style1">Eras quien estaba más cerca de las rocas.</span>
</p>
<p xml:id="subtitle59" begin="3554384167t" end="3574404167t" region="region0">
<span style="style1">¡No! Amo las rocas.</span>
</p>
<p xml:id="subtitle60" begin="3590670417t" end="3604434167t" region="region0">
<span style="style1">Esta es rara.</span>
</p>
<p xml:id="subtitle61" begin="3606936667t" end="3623202917t" region="region0">
<span style="style1">Se parece mucho...</span>
</p>
<p xml:id="subtitle62" begin="3624037084t" end="3648227917t" region="region0">
<span style="style1">A algo peligroso.</span>
</p>
<p xml:id="subtitle63" begin="3651981667t" end="3669082084t" region="region0">
<span style="style1">Podrían sacarse un ojo.</span>
</p>
<p xml:id="subtitle64" begin="3670750417t" end="3715795417t" region="region0">
<span style="style1">Mejor me lo llevo para que quien lo hizo</span>
<br/>
<span style="style1">no vuelva a tentarse.</span>
</p>
<p xml:id="subtitle65" begin="3719132084t" end="3731644584t" region="region0">
<span style="style1">¿Está todo bien?</span>
</p>
<p xml:id="subtitle66" begin="3733730000t" end="3781277500t" region="region0">
<span style="style1">Me gustaría hablar con usted</span>
<br/>
<span style="style1">luego de limpiar todo esto.</span>
</p>
<p xml:id="subtitle67" begin="3786699584t" end="3798795000t" region="region0">
<span style="style1">Por supuesto.</span>
</p>
<p xml:id="subtitle68" begin="3859272084t" end="3877623750t" region="region0">
<span style="style1">Lo juro. Yo no hice nada.</span>
</p>
<p xml:id="subtitle69" begin="3879709167t" end="3905985417t" region="region0">
<span style="style1">Hablaremos y lo aclararemos.</span>
</p>
<p xml:id="subtitle70" begin="3906819584t" end="3945191250t" region="region0">
<span style="style1">- Tu mamá es muy convincente.</span>
<br/>
<span style="style1">- Gracias, Alfur.</span>
</p>
<p xml:id="subtitle71" begin="3949362084t" end="3982311667t" region="region0">
<span style="style1">¿Por qué la Sra. Hallgrim me culpa?</span>
<br/>
<span style="style1">Me adora.</span>
</p>
<p xml:id="subtitle72" begin="3995241250t" end="4024437084t" region="region0">
<span style="style1">- Hilda, ¿podemos hablar?</span>
<br/>
<span style="style1">- Claro.</span>
</p>
<p xml:id="subtitle73" begin="4029442084t" end="4039452084t" region="region0">
<span style="style1">Disculpa.</span>
</p>
<p xml:id="subtitle74" begin="4049045000t" end="4059055000t" region="region0">
<span style="style1">Te contaré.</span>
</p>
<p xml:id="subtitle75" begin="4064894167t" end="4086999584t" region="region0">
<span style="style1">La Sra. Hallgrim no te adora.</span>
</p>
<p xml:id="subtitle76" begin="4090753334t" end="4101180417t" region="region0">
<span style="style1">¿En serio?</span>
</p>
<p xml:id="subtitle77" begin="4110773334t" end="4137466667t" region="region0">
<span style="style1">No eres la mejor siguiendo reglas.</span>
</p>
<p xml:id="subtitle78" begin="4144140000t" end="4190436250t" region="region0">
<span style="style1">¿Cómo pudo el rey Tryggvason</span>
<br/>
<span style="style1">perder la Batalla de Svolder?</span>
</p>
<p xml:id="subtitle79" begin="4193355834t" end="4210873334t" region="region0">
<span style="style1">Hilda, levanta la mano.</span>
</p>
<p xml:id="subtitle80" begin="4216712500t" end="4237149584t" region="region0">
<span style="style1">Y es la clase de ciencias.</span>
</p>
<p xml:id="subtitle81" begin="4241737500t" end="4272184584t" region="region0">
<span style="style1">Es un simulacro de trol. Obedece.</span>
</p>
<p xml:id="subtitle82" begin="4274687084t" end="4309305000t" region="region0">
<span style="style1">Si aquí hubiese un trol, esto no serviría.</span>
</p>
<p xml:id="subtitle83" begin="4314727084t" end="4333078750t" region="region0">
<span style="style1">No importa cuánto pagó.</span>
</p>
<p xml:id="subtitle84" begin="4333912917t" end="4366445417t" region="region0">
<span style="style1">Preguntémonos</span>
<br/>
<span style="style1">por qué compró tantas manzanas.</span>
</p>
<p xml:id="subtitle85" begin="4368530834t" end="4389385000t" region="region0">
<span style="style1">¿Alimenta a algún monstruo?</span>
</p>
<p xml:id="subtitle86" begin="4392721667t" end="4414410000t" region="region0">
<span style="style1">Terminó el horario de clases.</span>
</p>
<p xml:id="subtitle87" begin="4420249167t" end="4447776667t" region="region0">
<span style="style1">¡Nadie se preocupó por las manzanas!</span>
</p>
<p xml:id="subtitle88" begin="4448610834t" end="4467379584t" region="region0">
<span style="style1">La escuela no funciona así.</span>
</p>
<p xml:id="subtitle89" begin="4471133334t" end="4507419584t" region="region0">
<span style="style1">Preguntan y respondemos. No preguntamos.</span>
</p>
<p xml:id="subtitle90" begin="4508253750t" end="4522017500t" region="region0">
<span style="style1">Eso es lo divertido.</span>
</p>
<p xml:id="subtitle91" begin="4525771250t" end="4557886667t" region="region0">
<span style="style1">¿Para qué preguntar</span>
<br/>
<span style="style1">si ya saben las respuestas?</span>
</p>
<p xml:id="subtitle92" begin="4558720834t" end="4574152917t" region="region0">
<span style="style1">Porque es así.</span>
</p>
<p xml:id="subtitle93" begin="4577906667t" end="4624620000t" region="region0">
<span style="style1">Quizá te cambie con los chicos</span>
<br/>
<span style="style1">que tienen problemas de conducta.</span>
</p>
<p xml:id="subtitle94" begin="4625454167t" end="4646725417t" region="region0">
<span style="style1">¡Yo no tengo problemas!</span>
</p>
<p xml:id="subtitle95" begin="4651730417t" end="4700529167t" region="region0">
<span style="style1">- David, ¿dirías que perturbo en clase?</span>
<br/>
<span style="style1">- Nunca lo diría en clase.</span>
</p>
<p xml:id="subtitle96" begin="4701363334t" end="4735147084t" region="region0">
<span style="style1">Si la maestra está hablando,</span>
<br/>
<span style="style1">crearía disturbio.</span>
</p>
<p xml:id="subtitle97" begin="4740986250t" end="4780192084t" region="region0">
<span style="style1">Quiero decir si crees</span>
<br/>
<span style="style1">que yo perturbo la clase.</span>
</p>
<p xml:id="subtitle98" begin="4785197084t" end="4793538750t" region="region0">
<span style="style1">Sí.</span>
</p>
<p xml:id="subtitle99" begin="4794372917t" end="4808970834t" region="region0">
<span style="style1">¿Qué? ¿De veras?</span>
</p>
<p xml:id="subtitle100" begin="4811056250t" end="4823985834t" region="region0">
<span style="style1">Pero no importa.</span>
</p>
<p xml:id="subtitle101" begin="4824820000t" end="4851096250t" region="region0">
<span style="style1">De ese modo, no me reprende a mí.</span>
</p>
<p xml:id="subtitle102" begin="4927422500t" end="4963291667t" region="region0">
<span style="style1">Mira, los padres de Frida. ¿Los saludamos?</span>
</p>
<p xml:id="subtitle103" begin="4968713750t" end="4978723750t" region="region0">
<span style="style1">Buena idea.</span>
</p>
<p xml:id="subtitle104" begin="4984562917t" end="5007919584t" region="region0">
<span style="style1">Yo saludo. Tú no digas nada.</span>
</p>
<p xml:id="subtitle105" begin="5011256250t" end="5027522500t" region="region0">
<span style="style1">¿Hablas sola?</span>
</p>
<p xml:id="subtitle106" begin="5036281250t" end="5054632917t" region="region0">
<span style="style1">No, hablaba con Al...</span>
</p>
<p xml:id="subtitle107" begin="5060055000t" end="5077572500t" region="region0">
<span style="style1">Sí, conmigo misma.</span>
</p>
<p xml:id="subtitle108" begin="5095090000t" end="5129707917t" region="region0">
<span style="style1">Hola. Soy Joanna, la mamá de Hilda.</span>
</p>
<p xml:id="subtitle109" begin="5152647500t" end="5166411250t" region="region0">
<span style="style1">Sí. Hilda.</span>
</p>
<p xml:id="subtitle110" begin="5168913750t" end="5189767917t" region="region0">
<span style="style1">Ustedes vivían en el bosque.</span>
</p>
<p xml:id="subtitle111" begin="5190602084t" end="5198943750t" region="region0">
<span style="style1">Sí.</span>
</p>
<p xml:id="subtitle112" begin="5212707500t" end="5233561667t" region="region0">
<span style="style1">¡Claro! Eso explica todo.</span>
</p>
<p xml:id="subtitle113" begin="5271099167t" end="5302797500t" region="region0">
<span style="style1">La Sra. Hallgrim me cree problemática.</span>
</p>
<p xml:id="subtitle114" begin="5305717084t" end="5329073750t" region="region0">
<span style="style1">Mamá estaba orgullosa de mí.</span>
</p>
<p xml:id="subtitle115" begin="5329907917t" end="5359937917t" region="region0">
<span style="style1">Podrías salvarte</span>
<br/>
<span style="style1">si encontramos al culpable.</span>
</p>
<p xml:id="subtitle116" begin="5363691667t" end="5380792084t" region="region0">
<span style="style1">¿Quién habrá sido?</span>
</p>
<p xml:id="subtitle117" begin="5427088334t" end="5437098334t" region="region0">
<span style="style1">¡La roca!</span>
</p>
<p xml:id="subtitle118" begin="5448776667t" end="5475887084t" region="region0">
<span style="style1">David, ¡tienes una roca trol!</span>
</p>
<p xml:id="subtitle119" begin="5476721250t" end="5492153334t" region="region0">
<span style="style1">¿Una roca trol?</span>
</p>
<p xml:id="subtitle120" begin="5559720834t" end="5593504584t" region="region0">
<span style="style1">- Es la que tiene nariz.</span>
<br/>
<span style="style1">- Pero es muy pequeña.</span>
</p>
<p xml:id="subtitle121" begin="5601429167t" end="5641052084t" region="region0">
<span style="style1">Bueno, era pequeña.</span>
<br/>
<span style="style1">Creo que creció un poco.</span>
</p>
<p xml:id="subtitle122" begin="5700695000t" end="5722800417t" region="region0">
<span style="style1">Un bebé. ¿Dónde la encontraste?</span>
</p>
<p xml:id="subtitle123" begin="5723634584t" end="5753247500t" region="region0">
<span style="style1">Donde hicimos el proyecto de exploradores.</span>
</p>
<p xml:id="subtitle124" begin="5759920834t" end="5783694584t" region="region0">
<span style="style1">Quizá salió del túnel de los vitra.</span>
</p>
<p xml:id="subtitle125" begin="5786614167t" end="5824151667t" region="region0">
<span style="style1">En el día son rocas.</span>
<br/>
<span style="style1">Se despiertan por la noche.</span>
</p>
<p xml:id="subtitle126" begin="5849176667t" end="5875870000t" region="region0">
<span style="style1">- Y en la oscuridad.</span>
<br/>
<span style="style1">- Sí.</span>
</p>
<p xml:id="subtitle127" begin="5876704167t" end="5918412500t" region="region0">
<span style="style1">Cuando anochezca,</span>
<br/>
<span style="style1">ya no podremos convertirlo en roca.</span>
</p>
<p xml:id="subtitle128" begin="5919246667t" end="5934261667t" region="region0">
<span style="style1">Está anocheciendo.</span>
</p>
<p xml:id="subtitle129" begin="5993904584t" end="6013090417t" region="region0">
<span style="style1">Saquémoslo ya de aquí.</span>
</p>
<p xml:id="subtitle130" begin="6013924584t" end="6071065000t" region="region0">
<span style="style1">Un trol en Trolberg es un problema.</span>
<br/>
<span style="style1">Por eso un muro rodea la ciudad.</span>
</p>
<p xml:id="subtitle131" begin="6071899167t" end="6126954167t" region="region0">
<span style="style1">Atraparon a un chico con un roca trol</span>
<br/>
<span style="style1">y estuvo 50 años en prisión.</span>
</p>
<p xml:id="subtitle132" begin="6131125000t" end="6169496667t" region="region0">
<span style="style1">- ¿Y si es un accidente?</span>
<br/>
<span style="style1">- Corresponden 100 años.</span>
</p>
<p xml:id="subtitle133" begin="6170330834t" end="6204114584t" region="region0">
<span style="style1">Realmente no aceptan que sea un accidente.</span>
</p>
<p xml:id="subtitle134" begin="6208285417t" end="6224968750t" region="region0">
<span style="style1">Entonces lo llevaremos</span>
</p>
<p xml:id="subtitle135" begin="6225802917t" end="6239566667t" region="region0">
<span style="style1">fuera de la ciudad.</span>
</p>
<p xml:id="subtitle136" begin="6300460834t" end="6317144167t" region="region0">
<span style="style1">¡La Sra. Hallgrim!</span>
</p>
<p xml:id="subtitle137" begin="6320480834t" end="6347591250t" region="region0">
<span style="style1">¿Cómo llegaremos a su escritorio?</span>
</p>
<p xml:id="subtitle138" begin="6380957917t" end="6390550834t" region="region0">
<span style="style1">Ya sé.</span>
</p>
<p xml:id="subtitle139" begin="6403063334t" end="6444771667t" region="region0">
<span style="style1">¿Quieres que libere a un bebé trol</span>
<br/>
<span style="style1">del escritorio?</span>
</p>
<p xml:id="subtitle140" begin="6453113334t" end="6475635834t" region="region0">
<span style="style1">Te gusta ayudar a los trols.</span>
</p>
<p xml:id="subtitle141" begin="6478138334t" end="6496072917t" region="region0">
<span style="style1">Me suele pasar seguido.</span>
</p>
<p xml:id="subtitle142" begin="6570313750t" end="6581992084t" region="region0">
<span style="style1">¡Iré a prisión!</span>
</p>
<p xml:id="subtitle143" begin="6694604584t" end="6703363334t" region="region0">
<span style="style1">¡Ay, no!</span>
</p>
<p xml:id="subtitle144" begin="6704197500t" end="6730890834t" region="region0">
<span style="style1">Le dirá a mi mamá que soy problemática.</span>
</p>
<p xml:id="subtitle145" begin="6733810417t" end="6749242500t" region="region0">
<span style="style1">Diseño gráfico.</span>
</p>
<p xml:id="subtitle146" begin="6751745000t" end="6783443334t" region="region0">
<span style="style1">Es un área fascinante.</span>
<br/>
<span style="style1">Debes ser muy talentosa.</span>
</p>
<p xml:id="subtitle147" begin="6784277500t" end="6815141667t" region="region0">
<span style="style1">No fue nada fácil desde que nos mudamos.</span>
</p>
<p xml:id="subtitle148" begin="6815975834t" end="6859769584t" region="region0">
<span style="style1">Lamento interrumpir,</span>
<br/>
<span style="style1">pero ¿podríamos hablar?</span>
</p>
<p xml:id="subtitle149" begin="6863940417t" end="6873116250t" region="region0">
<span style="style1">Claro.</span>
</p>
<p xml:id="subtitle150" begin="6878955417t" end="6896472917t" region="region0">
<span style="style1">Hilda, acércate.</span>
</p>
<p xml:id="subtitle151" begin="6921497917t" end="6951527917t" region="region0">
<span style="style1">- ¿Y si la distraen tus padres?</span>
<br/>
<span style="style1">- No.</span>
</p>
<p xml:id="subtitle152" begin="6954864584t" end="6979472500t" region="region0">
<span style="style1">No quiero que hablen con ella.</span>
</p>
<p xml:id="subtitle153" begin="6982809167t" end="7025768750t" region="region0">
<span style="style1">Quieren pedirle tarea extra</span>
<br/>
<span style="style1">para subir mi puntaje de matemática.</span>
</p>
<p xml:id="subtitle154" begin="7035361667t" end="7046205834t" region="region1">
<span style="style1">BIENVENIDOS</span>
</p>
<p xml:id="subtitle155" begin="7051210834t" end="7062472084t" region="region0">
<span style="style1">¿Qué es eso?</span>
</p>
<p xml:id="subtitle156" begin="7089999584t" end="7119612500t" region="region0">
<span style="style1">Mamá, mira. La Sra. Hallgrim.</span>
</p>
<p xml:id="subtitle157" begin="7128371250t" end="7146722917t" region="region0">
<span style="style1">Me alegra encontrarla.</span>
</p>
<p xml:id="subtitle158" begin="7149642500t" end="7183426250t" region="region0">
<span style="style1">Frida bajó un poco</span>
<br/>
<span style="style1">el puntaje de matemática.</span>
</p>
<p xml:id="subtitle159" begin="7185511667t" end="7223883334t" region="region0">
<span style="style1">Me está mirando.</span>
<br/>
<span style="style1">Te toca tomar la roca trol.</span>
</p>
<p xml:id="subtitle160" begin="7225551667t" end="7258501250t" region="region0">
<span style="style1">Te pasaré a Alfur.</span>
<br/>
<span style="style1">Solo súbelo al escritorio.</span>
</p>
<p xml:id="subtitle161" begin="7309385417t" end="7319812500t" region="region0">
<span style="style1">¡Cosquillas!</span>
</p>
<p xml:id="subtitle162" begin="7320646667t" end="7354847500t" region="region0">
<span style="style1">Y lo consideramos sumamente importante.</span>
</p>
<p xml:id="subtitle163" begin="7357350000t" end="7370696667t" region="region0">
<span style="style1">Ve. ¡De prisa!</span>
</p>
<p xml:id="subtitle164" begin="7432842084t" end="7447857084t" region="region0">
<span style="style1">¿Bajaste de mi mano?</span>
</p>
<p xml:id="subtitle165" begin="7449525417t" end="7474133334t" region="region0">
<span style="style1">Sí, ya llevo un tiempo aquí.</span>
</p>
<p xml:id="subtitle166" begin="7513756250t" end="7526268750t" region="region0">
<span style="style1">Seguro coincidirá</span>
</p>
<p xml:id="subtitle167" begin="7527937084t" end="7567142917t" region="region0">
<span style="style1">que los logros del alumno</span>
<br/>
<span style="style1">solo se limitan por su esfuerzo.</span>
</p>
<p xml:id="subtitle168" begin="7582157917t" end="7596755834t" region="region0">
<span style="style1">De prisa, David.</span>
</p>
<p xml:id="subtitle169" begin="7603846250t" end="7631373750t" region="region0">
<span style="style1">Alfur, ¿dónde estás? ¿Todo está bien?</span>
</p>
<p xml:id="subtitle170" begin="7645137500t" end="7653896250t" region="region0">
<span style="style1">¡Estupendo!</span>
</p>
<p xml:id="subtitle171" begin="7669328334t" end="7684760417t" region="region0">
<span style="style1">- Listo.</span>
<br/>
<span style="style1">- ¡Sí!</span>
</p>
<p xml:id="subtitle172" begin="7722715000t" end="7739815417t" region="region0">
<span style="style1">Oye, ¿y yo?</span>
</p>
<p xml:id="subtitle173" begin="7762337917t" end="7770679584t" region="region0">
<span style="style1">¡Ay, no!</span>
</p>
<p xml:id="subtitle174" begin="7801543750t" end="7812387917t" region="region0">
<span style="style1">Ya es tarde.</span>
</p>
<p xml:id="subtitle175" begin="7937512917t" end="7955447500t" region="region0">
<span style="style1">- ¿Estás bien?</span>
<br/>
<span style="style1">- Sí.</span>
</p>
<p xml:id="subtitle176" begin="7956281667t" end="7992985000t" region="region0">
<span style="style1">- Estoy bailando.</span>
<br/>
<span style="style1">- Sí, eso.</span>
</p>
<p xml:id="subtitle177" begin="7999658334t" end="8026351667t" region="region0">
<span style="style1">- Yo también.</span>
<br/>
<span style="style1">- Y yo...</span>
</p>
<p xml:id="subtitle178" begin="8030522500t" end="8050959584t" region="region0">
<span style="style1">...los veo bailar.</span>
</p>
<p xml:id="subtitle179" begin="8200692500t" end="8209034167t" region="region0">
<span style="style1">Se fue.</span>
</p>
<p xml:id="subtitle180" begin="8229471250t" end="8238647084t" region="region0">
<span style="style1">¿Adónde?</span>
</p>
<p xml:id="subtitle181" begin="8241566667t" end="8251159584t" region="region0">
<span style="style1">¿Qué cosa?</span>
</p>
<p xml:id="subtitle182" begin="8258250000t" end="8294119167t" region="region0">
<span style="style1">Las ganas de bailar. Ya no quiero.</span>
</p>
<p xml:id="subtitle183" begin="8297038750t" end="8307465834t" region="region0">
<span style="style1">Está suelto.</span>
</p>
<p xml:id="subtitle184" begin="8344169167t" end="8357932917t" region="region0">
<span style="style1">¿Qué pasa?</span>
</p>
<p xml:id="subtitle185" begin="8365023334t" end="8400475417t" region="region0">
<span style="style1">Deben ser los terremotos</span>
<br/>
<span style="style1">que perciben los muebles.</span>
</p>
<p xml:id="subtitle186" begin="8405897500t" end="8432590834t" region="region0">
<span style="style1">Leí sobre eso. De veras existen.</span>
</p>
<p xml:id="subtitle187" begin="8849674167t" end="8858015834t" region="region0">
<span style="style1">¡Hola!</span>
</p>
<p xml:id="subtitle188" begin="8886377500t" end="8894719167t" region="region0">
<span style="style1">¡Hilda!</span>
</p>
<p xml:id="subtitle189" begin="8900558334t" end="8909317084t" region="region0">
<span style="style1">¡Hilda!</span>
</p>
<p xml:id="subtitle190" begin="8912236667t" end="8937261667t" region="region0">
<span style="style1">- ¿Quién dijo eso?</span>
<br/>
<span style="style1">- Un fantasma.</span>
</p>
<p xml:id="subtitle191" begin="8938095834t" end="8961035417t" region="region0">
<span style="style1">Ella hace esto. ¡Es una bruja!</span>
</p>
<p xml:id="subtitle192" begin="8965206250t" end="8973547917t" region="region0">
<span style="style1">Lo sabía.</span>
</p>
<p xml:id="subtitle193" begin="8997321667t" end="9006080417t" region="region0">
<span style="style1">¡Ahí está!</span>
</p>
<p xml:id="subtitle194" begin="9061552500t" end="9080738334t" region="region0">
<span style="style1">Y creí que sería aburrido.</span>
</p>
<p xml:id="subtitle195" begin="9097004584t" end="9123697917t" region="region0">
<span style="style1">- Hilda, ¿qué haces?</span>
<br/>
<span style="style1">- Te explicaré.</span>
</p>
<p xml:id="subtitle196" begin="9124532084t" end="9140381250t" region="region0">
<span style="style1">Está... ¡allí!</span>
</p>
<p xml:id="subtitle197" begin="9337661667t" end="9346003334t" region="region0">
<span style="style1">¿Hilda?</span>
</p>
<p xml:id="subtitle198" begin="9361018334t" end="9369777084t" region="region0">
<span style="style1">Hola.</span>
</p>
<p xml:id="subtitle199" begin="9411068334t" end="9431505417t" region="region0">
<span style="style1">¡Hilda! ¡Vuelve aquí!</span>
</p>
<p xml:id="subtitle200" begin="9436093334t" end="9444435000t" region="region0">
<span style="style1">¡Vamos!</span>
</p>
<p xml:id="subtitle201" begin="9468625834t" end="9493650834t" region="region0">
<span style="style1">- ¡Hilda!</span>
<br/>
<span style="style1">- Eres la mamá de Hilda.</span>
</p>
<p xml:id="subtitle202" begin="9496570417t" end="9519510000t" region="region0">
<span style="style1">¿Qué le hizo a mi hijo?</span>
</p>
<p xml:id="subtitle203" begin="9520344167t" end="9550791250t" region="region0">
<span style="style1">Vive aterrado y le dan miedo las aves.</span>
</p>
<p xml:id="subtitle204" begin="9571645417t" end="9585826250t" region="region0">
<span style="style1">¿Y esta comezón?</span>
</p>
<p xml:id="subtitle205" begin="9599172917t" end="9619192917t" region="region0">
<span style="style1">Los piojos eran mala idea.</span>
</p>
<p xml:id="subtitle206" begin="10032105417t" end="10040447084t" region="region0">
<span style="style1">¿Adónde fue?</span>
</p>
<p xml:id="subtitle207" begin="10047537500t" end="10069642917t" region="region0">
<span style="style1">TELÉFONO DE EMERGENCIA TROL</span>
</p>
<p xml:id="subtitle208" begin="10114270834t" end="10128868750t" region="region0">
<span style="style1">¡No se vayan aún!</span>
</p>
<p xml:id="subtitle209" begin="10129702917t" end="10160567084t" region="region0">
<span style="style1">Se perderán la inauguración de la estatua.</span>
</p>
<p xml:id="subtitle210" begin="10170994167t" end="10190180000t" region="region0">
<span style="style1">No, claro que no.</span>
</p>
<p xml:id="subtitle211" begin="10192682500t" end="10202275417t" region="region0">
<span style="style1">Solo...</span>
</p>
<p xml:id="subtitle212" begin="10212285417t" end="10226466250t" region="region0">
<span style="style1">...íbamos al baño.</span>
</p>
<p xml:id="subtitle213" begin="10234807917t" end="10248988750t" region="region0">
<span style="style1">Yo, al de varones.</span>
</p>
<p xml:id="subtitle214" begin="10261918334t" end="10292782500t" region="region0">
<span style="style1">Bien. Saben lo que dicen de las estatuas.</span>
</p>
<p xml:id="subtitle215" begin="10299038750t" end="10342415417t" region="region0">
<span style="style1">"El cincel es el rayo</span>
<br/>
<span style="style1">que le da vida a la piedra".</span>
</p>
<p xml:id="subtitle216" begin="10354510834t" end="10384957917t" region="region0">
<span style="style1">¿Saben qué? Quedará bien en mi discurso.</span>
</p>
<p xml:id="subtitle217" begin="10385792084t" end="10400390000t" region="region0">
<span style="style1">Volveré a ensayarlo.</span>
</p>
<p xml:id="subtitle218" begin="10423329584t" end="10437510417t" region="region0">
<span style="style1">¡Mucha suerte!</span>
</p>
<p xml:id="subtitle219" begin="10444183750t" end="10461284167t" region="region0">
<span style="style1">Esperen. No corran en...</span>
</p>
<p xml:id="subtitle220" begin="10462118334t" end="10474630834t" region="region0">
<span style="style1">¡Hallgrim!</span>
</p>
<p xml:id="subtitle221" begin="10475465000t" end="10507997500t" region="region0">
<span style="style1">- No olvides...</span>
<br/>
<span style="style1">- La ceremonia de la estatua.</span>
</p>
<p xml:id="subtitle222" begin="10546786250t" end="10563469584t" region="region0">
<span style="style1">¿Por qué tengo comezón?</span>
</p>
<p xml:id="subtitle223" begin="10613102500t" end="10621444167t" region="region0">
<span style="style1">¡Ahí!</span>
</p>
<p xml:id="subtitle224" begin="10643966667t" end="10680670000t" region="region0">
<span style="style1">- Está en la ventilación.</span>
<br/>
<span style="style1">- Tendrás que meterte.</span>
</p>
<p xml:id="subtitle225" begin="10726549167t" end="10735307917t" region="region0">
<span style="style1">Permítanme.</span>
</p>
<p xml:id="subtitle226" begin="10743232500t" end="10764503750t" region="region0">
<span style="style1">Soy una exploradora.</span>
</p>
<p xml:id="subtitle227" begin="10912985417t" end="10933422500t" region="region0">
<span style="style1">Parecía ser más grande.</span>
</p>
<p xml:id="subtitle228" begin="10953859584t" end="10963869584t" region="region0">
<span style="style1">Sé qué hacer.</span>
</p>
<p xml:id="subtitle229" begin="11013919584t" end="11046869167t" region="region0">
<span style="style1">Hilda, me agradas, pero no puedo aceptar.</span>
</p>
<p xml:id="subtitle230" begin="11051457084t" end="11061050000t" region="region0">
<span style="style1">¿Qué haremos?</span>
</p>
<p xml:id="subtitle231" begin="11188260417t" end="11196602084t" region="region0">
<span style="style1">¿Hilda?</span>
</p>
<p xml:id="subtitle232" begin="11212451250t" end="11227049167t" region="region0">
<span style="style1">Tenemos que hablar.</span>
</p>
<p xml:id="subtitle233" begin="11306712084t" end="11334656667t" region="region0">
<span style="style1">Mi mamá es buena con los piojos.</span>
</p>
<p xml:id="subtitle234" begin="11335490834t" end="11344666667t" region="region0">
<span style="style1">No, gracias.</span>
</p>
<p xml:id="subtitle235" begin="11350505834t" end="11382204167t" region="region0">
<span style="style1">Estaba preocupada por su comportamiento,</span>
</p>
<p xml:id="subtitle236" begin="11386375000t" end="11441430000t" region="region0">
<span style="style1">pero esta noche, demostró</span>
<br/>
<span style="style1">que no se ajusta al modelo escolar.</span>
</p>
<p xml:id="subtitle237" begin="11446017917t" end="11474796667t" region="region0">
<span style="style1">Y arrastra a Frida y a David con ella.</span>
</p>
<p xml:id="subtitle238" begin="11479801667t" end="11520258750t" region="region0">
<span style="style1">Recomiendo cambiar a Hilda</span>
<br/>
<span style="style1">a una clase transitoria</span>
</p>
<p xml:id="subtitle239" begin="11521092917t" end="11554876667t" region="region0">
<span style="style1">donde reciba atención personalizada.</span>
</p>
<p xml:id="subtitle240" begin="11561132917t" end="11570308750t" region="region0">
<span style="style1">Perdón, mamá.</span>
</p>
<p xml:id="subtitle241" begin="11573228334t" end="11597419167t" region="region0">
<span style="style1">No me adapté tan bien como creías.</span>
</p>
<p xml:id="subtitle242" begin="11598253334t" end="11606595000t" region="region0">
<span style="style1">Tonterías.</span>
</p>
<p xml:id="subtitle243" begin="11613685417t" end="11634122500t" region="region0">
<span style="style1">Te quedarás donde estás.</span>
</p>
<p xml:id="subtitle244" begin="11645800834t" end="11670825834t" region="region0">
<span style="style1">Desconozco qué le pasó esta noche,</span>
</p>
<p xml:id="subtitle245" begin="11671660000t" end="11707946250t" region="region0">
<span style="style1">pero que arrastre a sus amigos</span>
<br/>
<span style="style1">con ella es excelente.</span>
</p>
<p xml:id="subtitle246" begin="11708780417t" end="11717539167t" region="region0">
<span style="style1">¿Oyeron eso?</span>
</p>
<p xml:id="subtitle247" begin="11718373334t" end="11766337917t" region="region0">
<span style="style1">Hilda, esta clase de interrupción</span>
<br/>
<span style="style1">es a lo que me refiero.</span>
</p>
<p xml:id="subtitle248" begin="11775513750t" end="11783855417t" region="region0">
<span style="style1">Continúe.</span>
</p>
<p xml:id="subtitle249" begin="11790528750t" end="11818473334t" region="region0">
<span style="style1">Ella necesita a sus amigos para crecer.</span>
</p>
<p xml:id="subtitle250" begin="11821392917t" end="11845166667t" region="region0">
<span style="style1">Aprendió muchísimo de ellos.</span>
</p>
<p xml:id="subtitle251" begin="11850171667t" end="11882287084t" region="region0">
<span style="style1">Si la saca de la clase,</span>
<br/>
<span style="style1">la hará retroceder.</span>
</p>
<p xml:id="subtitle252" begin="11891045834t" end="11933171250t" region="region0">
<span style="style1">Quizá podemos darle más tiempo...</span>
</p>
<p xml:id="subtitle253" begin="11953191250t" end="11965703750t" region="region0">
<span style="style1">Hilda, ¡bájate!</span>
</p>
<p xml:id="subtitle254" begin="12037442084t" end="12049120417t" region="region0">
<span style="style1">¿Qué rayos pasa?</span>
</p>
<p xml:id="subtitle255" begin="12101672917t" end="12110848750t" region="region0">
<span style="style1">¿Qué pasa?</span>
</p>
<p xml:id="subtitle256" begin="12151722917t" end="12160064584t" region="region0">
<span style="style1">Te tengo.</span>
</p>
<p xml:id="subtitle257" begin="12167989167t" end="12195933750t" region="region0">
<span style="style1">¿Es un trol?</span>
</p>
<p xml:id="subtitle258" begin="12196767917t" end="12220958750t" region="region0">
<span style="style1">Sí, pero ese me preocupa más.</span>
</p>
<p xml:id="subtitle259" begin="12345249584t" end="12366937917t" region="region0">
<span style="style1">¡Un trol en la ciudad!</span>
</p>
<p xml:id="subtitle260" begin="12367772084t" end="12389460417t" region="region0">
<span style="style1">- ¡La alarma!</span>
<br/>
<span style="style1">- No.</span>
</p>
<p xml:id="subtitle261" begin="12390294584t" end="12405309584t" region="region0">
<span style="style1">Evitemos problemas.</span>
</p>
<p xml:id="subtitle262" begin="12454525417t" end="12481218750t" region="region0">
<span style="style1">- ¡Esto es un problema!</span>
<br/>
<span style="style1">- No.</span>
</p>
<p xml:id="subtitle263" begin="12482052917t" end="12501655834t" region="region0">
<span style="style1">Causará pánico y peleas,</span>
</p>
<p xml:id="subtitle264" begin="12502490000t" end="12524595417t" region="region0">
<span style="style1">y David irá 100 años a prisión.</span>
</p>
<p xml:id="subtitle265" begin="12542530000t" end="12560881667t" region="region0">
<span style="style1">No quiere problemas.</span>
</p>
<p xml:id="subtitle266" begin="12579233334t" end="12591745834t" region="region0">
<span style="style1">Hilda, ¡regresa!</span>
</p>
<p xml:id="subtitle267" begin="12723544167t" end="12731885834t" region="region0">
<span style="style1">Mamá.</span>
</p>
<p xml:id="subtitle268" begin="12926663750t" end="12941261667t" region="region0">
<span style="style1">Vino por su bebé.</span>
</p>
<p xml:id="subtitle269" begin="12947935000t" end="12956276667t" region="region0">
<span style="style1">¿Lo ven?</span>
</p>
<p xml:id="subtitle270" begin="12983387084t" end="12999236250t" region="region0">
<span style="style1">¿Cómo lo supiste?</span>
</p>
<p xml:id="subtitle271" begin="13000070417t" end="13030934584t" region="region0">
<span style="style1">Temo que es excelente para esas cosas.</span>
</p>
<p xml:id="subtitle272" begin="13153557084t" end="13178165000t" region="region0">
<span style="style1">¿Te dejó quedarte en la clase?</span>
</p>
<p xml:id="subtitle273" begin="13178999167t" end="13204858334t" region="region0">
<span style="style1">¿Y no dirá nada de los trols?</span>
</p>
<p xml:id="subtitle274" begin="13207777917t" end="13251154584t" region="region0">
<span style="style1">- ¿Cómo lo hiciste?</span>
<br/>
<span style="style1">- Llegamos a un acuerdo.</span>
</p>
<p xml:id="subtitle275" begin="13251988750t" end="13274511250t" region="region0">
<span style="style1">Su hija es excepcional.</span>
</p>
<p xml:id="subtitle276" begin="13313300000t" end="13351671667t" region="region0">
<span style="style1">¡Tengo una noticia terrible!</span>
<br/>
<span style="style1">¡Una muy mala noticia!</span>
</p>
<p xml:id="subtitle277" begin="13352505834t" end="13371274584t" region="region0">
<span style="style1">Es una catástrofe.</span>
</p>
<p xml:id="subtitle278" begin="13375028334t" end="13395465417t" region="region0">
<span style="style1">Me duele el corazón.</span>
</p>
<p xml:id="subtitle279" begin="13402138750t" end="13423827084t" region="region0">
<span style="style1">¡Por favor, no!</span>
</p>
<p xml:id="subtitle280" begin="13427997917t" end="13447600834t" region="region0">
<span style="style1">- ¿Por qué?</span>
<br/>
<span style="style1">- ¿Qué pasó?</span>
</p>
<p xml:id="subtitle281" begin="13450103334t" end="13494314167t" region="region0">
<span style="style1">Se canceló la inauguración de la estatua.</span>
</p>
<p xml:id="subtitle282" begin="13812965834t" end="13852588750t" region="region0">
<span style="style1">Subtítulos: Juliana Sestelo</span>
</p>
</div>`;

// const stripContent = text.replaceAll(regexForStripHTML, "");
// console.log(stripContent);
// console.log(text.length);
// console.log(stripContent.length);
// const regexForStripHTML = "/<([^</> ]+)[^<>]*?>[^<>]*?</\x01> */gi";

/*
string textWithHTML
string subsOnlyText
given string text..
initiate open bracket counter
initiate closed bracker counter
textWithHTML.foreach(char, () =>{
    if < or >
        add 1 to < or > counter
    if counters are not equal {
        continue to next line
        (this code is unnecessary)
    } 
    if counters are equal {
        subOnlyText+= char
    }
})
*/

let testTextWithHTML = "<html><p>this is a simple test</p></html>";
let subsOnlyText = "";

let bracketCounter = 0;

// Array.from(text).foreach((char) => {
//   if (char === "<" || char === ">") {
//     bracketCounter++;
//   }
//   if (bracketCounter % 2 === 1) {
//     subsOnlyText += char;
//     return true;
//   } else return false;
// });

// i forgot the syntax for forEach so i'm doing it the brute force way for now
for (let i = 1; i < text.length + 1; i++) {
  console.log("success");
  let char = text[i - 1];
  console.log("char = " + char);
  if (char === "<" || char === ">") {
    console.log("bracket hit");

    bracketCounter++;
  }
  if (bracketCounter % 2 === 0) {
    console.log("inside text here:");
    if (char != ">") {
      subsOnlyText += char;
    }
  } else if (bracketCounter % 2 === 1) {
    continue;
  } else {
    console.log("uh oh error");

    return false;
  }
}

console.log(subsOnlyText.length);
console.log(subsOnlyText);
