import { shallow } from 'enzyme';
import { GifGridItem } from "../components/GifGridItem";


describe('TestComponent ', ()=>{

    let wrapper ;
     
    let value = {
        id: 'alosy78fw',
        title: 'my title',
        img: 'content_img'
    } 

    beforeEach(()=>{
       wrapper = shallow(
           <GifGridItem 
            { ...value }
           />
       );
    })
        test('visualizar componente', ()=>{
            expect( wrapper ).toMatchSnapshot();
        });

})