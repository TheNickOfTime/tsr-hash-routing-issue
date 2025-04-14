import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
	component: App,
});

function App() {
	return (
		<main>
			<h1 id='heading-1'>
				Heading 1
				<a className='heading-link' href='#heading-1'>
					<span>🔗</span>
				</a>
			</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit nunc vitae
				scelerisque posuere. Vivamus gravida urna sit amet rhoncus pharetra. In mollis, erat
				et mollis dignissim, sem nisi accumsan mauris, eu efficitur urna felis id nibh.
				Vestibulum at metus et magna tempus interdum eu sit amet dui. Vestibulum sit amet
				massa eget est elementum malesuada. Vestibulum in nunc at risus vehicula aliquam.
				Nullam vel arcu id tellus sagittis luctus. Morbi ac velit sapien. Aenean tincidunt
				ultricies erat vel ultricies. Donec convallis sagittis ex, a rhoncus augue bibendum
				a. Fusce nisi mi, posuere a condimentum vitae, molestie sed arcu. Nam cursus massa
				vel faucibus suscipit. Ut lobortis accumsan enim, ut ultrices sapien dictum a.
				Aliquam eros felis, hendrerit at sollicitudin faucibus, luctus et erat. Vivamus
				dapibus justo in tempor maximus.
			</p>
			<p>
				Vestibulum ac tortor ultricies, pulvinar lorem at, convallis elit. Lorem ipsum dolor
				sit amet, consectetur adipiscing elit. Vestibulum imperdiet dui turpis, quis
				interdum ex pretium in. Aliquam est enim, aliquam eget eros a, commodo vestibulum
				quam. Integer quis tellus ornare, malesuada nunc tincidunt, mollis lacus. Nullam
				nunc sapien, hendrerit nec nunc eu, imperdiet vestibulum massa. Sed dictum bibendum
				quam a malesuada. Vivamus sed accumsan lorem. Mauris sed pulvinar odio. Proin
				sagittis felis vitae tortor ullamcorper, eget gravida risus cursus. Vivamus bibendum
				vitae nunc ac ullamcorper. Donec vitae mi pellentesque, euismod est quis,
				pellentesque arcu. Donec eu justo a ex suscipit lacinia quis id augue. Aenean
				euismod, eros sollicitudin malesuada rutrum, ipsum enim mattis urna, sit amet
				faucibus dolor sem et metus.
			</p>
			<h2 id='heading-2'>
				Heading 2
				<a className='heading-link' href='#heading-2'>
					<span>🔗</span>
				</a>
			</h2>
			<p>
				Quisque molestie pulvinar diam, eget viverra dui laoreet ac. Nullam rhoncus tellus
				at accumsan condimentum. Quisque ornare lectus vel elementum finibus. Nullam ut
				tortor nec ex feugiat vestibulum. Vestibulum ligula turpis, aliquam in urna
				fringilla, aliquet interdum mauris. Fusce faucibus commodo leo ut eleifend. Quisque
				egestas libero leo, non pharetra libero suscipit et. Donec vitae odio finibus,
				auctor ipsum sit amet, sodales quam. Vivamus tempor eros eget turpis congue, in
				tincidunt velit porttitor.
			</p>
			<p>
				In varius id lectus non consectetur. Maecenas non dignissim dolor. Nulla eu turpis
				quis nibh hendrerit condimentum. In imperdiet nisi id luctus rhoncus. Fusce maximus
				tellus nibh, eu hendrerit elit commodo non. Vestibulum vestibulum, felis vel mollis
				hendrerit, elit ligula aliquet nibh, at tempus metus ipsum eget tortor. Morbi
				convallis lacus ac tortor lacinia, ut malesuada libero pulvinar. Phasellus volutpat
				augue at nisi fermentum, sit amet sagittis neque aliquet. Nulla facilisi. Sed a
				dignissim lacus. Vestibulum vel pretium massa.
			</p>
			<h2 id='heading-3'>
				Heading 3
				<a className='heading-link' href='#heading-3'>
					<span>🔗</span>
				</a>
			</h2>
			<p>
				Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc non diam sit amet
				odio lobortis commodo. Integer quis ultrices neque, vel pretium lacus. Quisque
				aliquet sodales purus, in dapibus ante interdum ac. Ut leo enim, efficitur a est a,
				pulvinar pulvinar eros. Pellentesque quis dignissim nisi, ac posuere dui. Cras
				pharetra, tellus sit amet sodales sagittis, nunc nisl varius turpis, et feugiat
				sapien nunc nec turpis. Etiam sed nulla lectus. Phasellus sit amet rhoncus turpis.
				Sed nec commodo leo. Aliquam mattis leo quis felis ornare, vitae accumsan magna
				tempor. Phasellus tempus sem non augue volutpat, non imperdiet lectus cursus.
				Maecenas lobortis nunc ligula, id maximus nunc porttitor sit amet. Nam vel arcu vel
				lacus sodales mollis. Vivamus ut eros id elit dignissim suscipit quis a mi.
			</p>
			<p>
				Morbi commodo magna et ipsum commodo, a pellentesque augue aliquam. Quisque mauris
				tellus, ultrices a turpis sed, sodales suscipit ligula. In hac habitasse platea
				dictumst. Pellentesque dapibus lorem et felis tincidunt euismod. Pellentesque
				maximus felis eu molestie pulvinar. Nulla tempus vehicula placerat. Vivamus sed
				eleifend erat. Aenean aliquam metus nunc, in laoreet ex posuere at.
			</p>
			<h2 id='heading-4'>
				Heading 4
				<a className='heading-link' href='#heading-4'>
					<span>🔗</span>
				</a>
			</h2>
			<p>
				Morbi magna nibh, congue non orci quis, pulvinar mollis mauris. Donec nisl metus,
				venenatis vitae nisl vitae, vestibulum varius risus. Curabitur vitae lacus et sem
				malesuada posuere ac vitae dolor. Pellentesque lacinia, arcu a convallis
				condimentum, ligula massa molestie lorem, molestie lobortis sapien mauris vel orci.
				Mauris ultrices congue faucibus. Praesent commodo nec neque sed feugiat. Integer
				ultricies sem varius ipsum commodo, mollis laoreet libero tincidunt. Donec fringilla
				magna vitae justo blandit ornare.
			</p>
			<p>
				Praesent vehicula magna tellus, vitae scelerisque felis tristique ut. Integer
				lobortis nulla leo, non vulputate ipsum bibendum vehicula. Vestibulum eros ex,
				aliquet eu imperdiet id, aliquet in ex. Duis rhoncus tincidunt lobortis. Vestibulum
				fermentum a leo eget porta. Mauris aliquam, dolor sit amet ullamcorper suscipit,
				elit augue volutpat purus, in suscipit odio ipsum a lorem. Duis neque magna,
				condimentum a aliquet eget, tristique ut orci. Phasellus et elit lorem. Etiam nec
				scelerisque lacus, vitae pulvinar magna. Nullam gravida turpis ac lectus sagittis,
				ac rhoncus turpis tempor. Donec purus sem, posuere ut volutpat et, molestie eget
				magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
				ridiculus mus. In molestie magna leo, ac tincidunt lorem mattis non. Donec euismod
				enim lacus, id commodo mi bibendum volutpat. Orci varius natoque penatibus et magnis
				dis parturient montes, nascetur ridiculus mus.
			</p>
			<h2 id='heading-5'>
				Heading 5
				<a className='heading-link' href='#heading-5'>
					<span>🔗</span>
				</a>
			</h2>
			<p>
				Suspendisse sit amet dictum risus. Morbi vehicula, quam non congue suscipit, odio
				augue ultrices massa, ac mattis nulla augue sodales nisi. Cras auctor porttitor
				enim, a molestie justo pellentesque vitae. Morbi nec ante blandit, semper arcu
				hendrerit, gravida purus. Quisque imperdiet mauris et nulla ullamcorper pulvinar.
				Donec a dolor leo. Etiam feugiat aliquet sem at sollicitudin. Donec a tincidunt
				risus. Quisque placerat tristique felis, vel porta orci dignissim ac. Vestibulum
				nulla enim, mattis sit amet arcu tempor, gravida gravida arcu. Donec rhoncus
				vestibulum nulla quis consequat. Nunc molestie neque fringilla, aliquet tortor ac,
				aliquam sem.
			</p>
			<p>
				Morbi quis ligula tempor, egestas tellus sit amet, congue mauris. Nulla rutrum enim
				sit amet nisi pretium, quis tristique leo bibendum. Nullam tortor nisi, suscipit
				quis euismod at, gravida eu lectus. Nulla eu dolor sit amet diam volutpat finibus.
				Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
				egestas. Donec finibus metus id posuere dignissim. Quisque mattis accumsan euismod.
				Cras tempus ipsum id metus dignissim, eu pellentesque velit feugiat. Vestibulum
				dolor tortor, condimentum at velit non, aliquet consectetur ex. In euismod
				vestibulum erat, a cursus metus malesuada quis. Orci varius natoque penatibus et
				magnis dis parturient montes, nascetur ridiculus mus. In eget diam dui.
			</p>
		</main>
	);
}
