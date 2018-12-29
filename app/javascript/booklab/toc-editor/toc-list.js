import { SortableContainer } from 'react-sortable-hoc';
import cn from 'classnames';
import TocItem from './toc-item';


export default SortableContainer(({
  items, onChangeItem, onDeleteItem, activeIndex, onSelectItem, autoFocus, onIndent, sorting,
}) => (
  <div className={cn('toc-list', 'col-8', { sorting })}>
    {items.map(item => (
      <TocItem
        key={`item-${item.key}`}
        autoFocus={autoFocus}
        onChangeItem={onChangeItem}
        onIndent={onIndent}
        onDelete={onDeleteItem}
        index={item.index}
        item={item}
        active={activeIndex === item.index}
        onSelectItem={onSelectItem}
      />
    ))}
  </div>
));
