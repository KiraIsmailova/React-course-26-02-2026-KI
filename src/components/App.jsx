import { restaurants } from '../../materials/mock';
import { ProgressBar } from './ProgressBar/ProgressBar';
import { Tabs } from './Tabs/Tabs';
import { ThemeProvider } from './ThemeContext/ThemeProvider';
import { Layout } from './layout/layout';
import { Restaurant } from './restaurant/restaurant';
import { AuthProvider } from './AuthContext/AuthProvider';

export const App = () => {
  const renderRestaurantContent = (restaurantData) => {
    return <Restaurant restaurant={restaurantData} key={restaurantData.id} />;
  };

  return (
    <AuthProvider>
      <ThemeProvider>
        <Layout>
          <ProgressBar />
          <Tabs items={restaurants} renderContent={renderRestaurantContent} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            blandit tortor sit amet libero suscipit tristique. Sed eu sagittis
            orci. Integer tristique, tortor dapibus facilisis tincidunt, ante
            elit semper libero, in tincidunt arcu urna quis sem. In blandit urna
            metus, id pretium ipsum tincidunt non.
          </p>
          <p>
            Curabitur id tempor enim, nec lobortis justo. Curabitur erat augue,
            aliquet vel hendrerit id, pellentesque eu sapien. Sed auctor dictum
            sem sit amet dictum. Proin id lacus at nibh vestibulum tristique.
            Curabitur non blandit dolor, vitae sodales justo.
          </p>
          <p>
            Suspendisse et vestibulum elit, eu porttitor ante. Phasellus vel
            sapien dui. Morbi interdum lacus vel arcu cursus imperdiet. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Nulla vitae tellus eu orci elementum imperdiet
            at nec nisi. Pellentesque hendrerit, tortor vel tempor dignissim,
            est nisi molestie nibh, a semper risus nunc quis felis.
          </p>
          <p>
            Nullam tempor tincidunt enim id dictum. Etiam dictum dui id purus
            placerat feugiat. Phasellus consequat ante massa. Ut odio sem,
            condimentum eget erat quis, volutpat convallis libero. Donec id
            pulvinar magna. Donec id enim mi. Nam lobortis lorem est, ac mollis
            urna euismod sed. Cras dignissim ut tortor vel posuere.
          </p>
          <p>
            Sed lacinia felis vitae consectetur rutrum. Sed velit ligula,
            vehicula at consectetur eget, tempor eget tellus. Nulla molestie
            nisl non nunc euismod, tincidunt mattis massa suscipit. Nulla
            facilisi.
          </p>
          <p>
            Pellentesque sem metus, ultrices ac lobortis ac, sodales ut eros.
            Nam tincidunt turpis sit amet congue scelerisque. Nunc elementum
            gravida ipsum, id placerat turpis pulvinar ut. Aliquam cursus felis
            et sagittis suscipit. Nam porta ligula est, vel varius nisi
            consectetur vel. Nam congue augue metus, sit amet blandit est
            hendrerit adipiscing. Nam sagittis dignissim urna. Nullam at rhoncus
            arcu. Nulla varius, dui placerat ullamcorper commodo, risus nibh
            fringilla dui, sit amet dignissim odio lectus et urna. Duis faucibus
            felis consectetur massa dictum ultricies. Maecenas eget porta mi,
            non dapibus dolor.
          </p>
          <p>
            Pellentesque sem metus, ultrices ac lobortis ac, sodales ut eros.
            Nam tincidunt turpis sit amet congue scelerisque. Nunc elementum
            gravida ipsum, id placerat turpis pulvinar ut. Aliquam cursus felis
            et sagittis suscipit. Nam porta ligula est, vel varius nisi
            consectetur vel. Nam congue augue metus, sit amet blandit est
            hendrerit adipiscing. Nam sagittis dignissim urna. Nullam at rhoncus
            arcu. Nulla varius, dui placerat ullamcorper commodo, risus nibh
            fringilla dui, sit amet dignissim odio lectus et urna. Duis faucibus
            felis consectetur massa dictum ultricies. Maecenas eget porta mi,
            non dapibus dolor.
          </p>
          <p>
            Praesent congue iaculis orci, vitae tempus orci accumsan ac. Nunc id
            nulla massa. Aliquam tincidunt quis mi et varius. Donec sagittis,
            orci id posuere porttitor, turpis arcu pulvinar odio, ac euismod
            tellus urna a massa. Fusce at enim risus. Nullam volutpat elementum
            nulla, sit amet fermentum neque iaculis eget. Maecenas ac nisi
            vulputate, pulvinar odio imperdiet, scelerisque sapien. Aenean non
            mi at turpis aliquam commodo sit amet et lectus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            blandit tortor sit amet libero suscipit tristique. Sed eu sagittis
            orci. Integer tristique, tortor dapibus facilisis tincidunt, ante
            elit semper libero, in tincidunt arcu urna quis sem. In blandit urna
            metus, id pretium ipsum tincidunt non.
          </p>
          <p>
            Curabitur id tempor enim, nec lobortis justo. Curabitur erat augue,
            aliquet vel hendrerit id, pellentesque eu sapien. Sed auctor dictum
            sem sit amet dictum. Proin id lacus at nibh vestibulum tristique.
            Curabitur non blandit dolor, vitae sodales justo.
          </p>
          <p>
            Suspendisse et vestibulum elit, eu porttitor ante. Phasellus vel
            sapien dui. Morbi interdum lacus vel arcu cursus imperdiet. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Nulla vitae tellus eu orci elementum imperdiet
            at nec nisi. Pellentesque hendrerit, tortor vel tempor dignissim,
            est nisi molestie nibh, a semper risus nunc quis felis.
          </p>
          <p>
            Nullam tempor tincidunt enim id dictum. Etiam dictum dui id purus
            placerat feugiat. Phasellus consequat ante massa. Ut odio sem,
            condimentum eget erat quis, volutpat convallis libero. Donec id
            pulvinar magna. Donec id enim mi. Nam lobortis lorem est, ac mollis
            urna euismod sed. Cras dignissim ut tortor vel posuere.
          </p>
          <p>
            Sed lacinia felis vitae consectetur rutrum. Sed velit ligula,
            vehicula at consectetur eget, tempor eget tellus. Nulla molestie
            nisl non nunc euismod, tincidunt mattis massa suscipit. Nulla
            facilisi.
          </p>
          <p>
            Pellentesque sem metus, ultrices ac lobortis ac, sodales ut eros.
            Nam tincidunt turpis sit amet congue scelerisque. Nunc elementum
            gravida ipsum, id placerat turpis pulvinar ut. Aliquam cursus felis
            et sagittis suscipit. Nam porta ligula est, vel varius nisi
            consectetur vel. Nam congue augue metus, sit amet blandit est
            hendrerit adipiscing. Nam sagittis dignissim urna. Nullam at rhoncus
            arcu. Nulla varius, dui placerat ullamcorper commodo, risus nibh
            fringilla dui, sit amet dignissim odio lectus et urna. Duis faucibus
            felis consectetur massa dictum ultricies. Maecenas eget porta mi,
            non dapibus dolor.
          </p>
          <p>
            Pellentesque sem metus, ultrices ac lobortis ac, sodales ut eros.
            Nam tincidunt turpis sit amet congue scelerisque. Nunc elementum
            gravida ipsum, id placerat turpis pulvinar ut. Aliquam cursus felis
            et sagittis suscipit. Nam porta ligula est, vel varius nisi
            consectetur vel. Nam congue augue metus, sit amet blandit est
            hendrerit adipiscing. Nam sagittis dignissim urna. Nullam at rhoncus
            arcu. Nulla varius, dui placerat ullamcorper commodo, risus nibh
            fringilla dui, sit amet dignissim odio lectus et urna. Duis faucibus
            felis consectetur massa dictum ultricies. Maecenas eget porta mi,
            non dapibus dolor.
          </p>
          <p>
            Praesent congue iaculis orci, vitae tempus orci accumsan ac. Nunc id
            nulla massa. Aliquam tincidunt quis mi et varius. Donec sagittis,
            orci id posuere porttitor, turpis arcu pulvinar odio, ac euismod
            tellus urna a massa. Fusce at enim risus. Nullam volutpat elementum
            nulla, sit amet fermentum neque iaculis eget. Maecenas ac nisi
            vulputate, pulvinar odio imperdiet, scelerisque sapien. Aenean non
            mi at turpis aliquam commodo sit amet et lectus.
          </p>
        </Layout>
      </ThemeProvider>
    </AuthProvider>
  );
};
