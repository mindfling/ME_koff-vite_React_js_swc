// * Container с дочерними элементами
import './style.scss';

export const Container = (props) => (
    <div className="container">
      {props.children}
    </div>
);
